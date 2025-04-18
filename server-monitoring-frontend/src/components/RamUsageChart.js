import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './RamUsageChart.css';
import { fetchServerMetrics } from '../services/api';

const RamUsageChart = ({ serverId }) => {
  const [ramData, setRamData] = useState([]);

  useEffect(() => {
    fetchServerMetrics(serverId).then(data => {
      const reversed = [...data].reverse();
      setRamData(reversed);
    });
  }, [serverId]);
  

  const chartData = {
    labels: ramData.map(m => new Date(m.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'RAM Usage (%)',
        data: ramData.map(m => m.ram),
        borderColor: '#7b61ff',
        fill: true,
        backgroundColor: 'rgba(123, 97, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="ram-chart">
      <h3>Ram Usage</h3>
      <Line data={chartData} />
    </div>
  );
};

export default RamUsageChart;
