import React from 'react';
import RamUsageChart from '../components/RamUsageChart';
import CPUUsageChart from '../components/CPUUsageChart';
import HeatMap from '../components/HeatMap';
import ServerTable from '../components/ServerTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-row">
        <RamUsageChart serverId={1} />
        <div className="side-panels">
          <CPUUsageChart />
          <HeatMap />
        </div>
      </div>
      <ServerTable />
    </div>
  );
};

export default Dashboard;
