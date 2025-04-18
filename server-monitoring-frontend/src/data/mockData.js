// Generate random data for the charts
const generateRandomData = (count, min, max) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
  }
  
  // Generate timestamps for the last 24 hours
  const generateTimeLabels = () => {
    const labels = []
    const now = new Date()
    for (let i = 23; i >= 0; i--) {
      const date = new Date(now)
      date.setHours(now.getHours() - i)
      labels.push(date.getHours() + ":00")
    }
    return labels
  }
  
  // Generate server names
  const generateServerNames = (count) => {
    const prefixes = ["app", "db", "web", "api", "cache", "auth", "file", "mail", "proxy", "backup"]
    const environments = ["prod", "dev", "stage", "test"]
  
    return Array.from({ length: count }, (_, i) => {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const env = environments[Math.floor(Math.random() * environments.length)]
      const num = Math.floor(Math.random() * 10) + 1
      return `${prefix}-${env}-${num}`
    })
  }
  
  // Generate IP addresses
  const generateIpAddresses = (count) => {
    return Array.from({ length: count }, () => {
      return `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
    })
  }
  
  // Generate server statuses
  const generateServerStatuses = (count) => {
    const statuses = ["Online", "Warning", "Offline"]
    const weights = [0.8, 0.15, 0.05] // 80% online, 15% warning, 5% offline
  
    return Array.from({ length: count }, () => {
      const rand = Math.random()
      let cumulativeWeight = 0
  
      for (let i = 0; i < statuses.length; i++) {
        cumulativeWeight += weights[i]
        if (rand < cumulativeWeight) {
          return statuses[i]
        }
      }
  
      return statuses[0] // Default to online
    })
  }
  
  // Generate uptime strings
  const generateUptimes = (count) => {
    return Array.from({ length: count }, () => {
      const days = Math.floor(Math.random() * 100)
      const hours = Math.floor(Math.random() * 24)
      const minutes = Math.floor(Math.random() * 60)
  
      return `${days}d ${hours}h ${minutes}m`
    })
  }
  
  // Generate CPU usage data
  const cpuData = generateRandomData(8, 10, 90)
  const cpuLabels = ["Server 1", "Server 2", "Server 3", "Server 4", "Server 5", "Server 6", "Server 7", "Server 8"]
  const cpuUsageData = cpuLabels.map((name, index) => ({
    name,
    value: cpuData[index],
  }))
  
  // Generate memory usage data
  const memoryData = generateRandomData(8, 20, 95)
  const memoryLabels = ["Server 1", "Server 2", "Server 3", "Server 4", "Server 5", "Server 6", "Server 7", "Server 8"]
  const memoryUsageData = memoryLabels.map((name, index) => ({
    name,
    value: memoryData[index],
  }))
  
  // Generate disk usage data
  const diskUsageData = [
    { name: "Used", value: 850 },
    { name: "Free", value: 150 },
    { name: "Reserved", value: 50 },
    { name: "System", value: 100 },
  ]
  
  // Generate network traffic data
  const timeLabels = generateTimeLabels()
  const incomingData = generateRandomData(24, 10, 100)
  const outgoingData = generateRandomData(24, 5, 80)
  
  const networkTrafficData = timeLabels.map((time, index) => ({
    time,
    incoming: incomingData[index],
    outgoing: outgoingData[index],
  }))
  
  // Generate servers list data
  const serverCount = 12
  const serverNames = generateServerNames(serverCount)
  const ipAddresses = generateIpAddresses(serverCount)
  const statuses = generateServerStatuses(serverCount)
  const uptimes = generateUptimes(serverCount)
  const cpuUsages = generateRandomData(serverCount, 5, 95)
  const memoryUsages = generateRandomData(serverCount, 10, 90)
  const diskUsages = generateRandomData(serverCount, 20, 85)
  
  const serversData = Array.from({ length: serverCount }, (_, i) => ({
    id: i + 1,
    name: serverNames[i],
    status: statuses[i],
    ip: ipAddresses[i],
    cpu: cpuUsages[i],
    memory: memoryUsages[i],
    disk: diskUsages[i],
    uptime: uptimes[i],
  }))
  
  // Count alerts by severity
  const criticalAlerts = serversData.filter((server) => server.status === "Offline").length
  const mediumAlerts = serversData.filter((server) => server.status === "Warning").length
  const lowAlerts =
    serversData.filter((server) => server.cpu > 80 || server.memory > 80 || server.disk > 80).length -
    (criticalAlerts + mediumAlerts) // Avoid double counting
  
  // Export the mock data
  export const mockData = {
    alerts: {
      critical: criticalAlerts,
      medium: mediumAlerts,
      low: lowAlerts,
      total: serversData.length,
    },
    cpuUsage: cpuUsageData,
    memoryUsage: memoryUsageData,
    diskUsage: diskUsageData,
    networkTraffic: networkTrafficData,
    servers: serversData,
  }
  