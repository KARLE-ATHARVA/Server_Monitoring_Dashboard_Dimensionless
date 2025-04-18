import React from 'react';
import './CPUUsageChart.css';

const CPUUsageChart = ({ usage = 72 }) => {
  const getStatusDetails = (value) => {
    if (value < 50) {
      return {
        text: 'Good',
        color: '#4caf50',
        range: '0% - 49%',
        description: 'CPU usage is within optimal range.',
      };
    } else if (value < 80) {
      return {
        text: 'Warning',
        color: '#ff9800',
        range: '50% - 79%',
        description: 'CPU is under moderate load. Monitor for spikes.',
      };
    } else {
      return {
        text: 'Critical',
        color: '#f44336',
        range: '80% - 100%',
        description: 'High CPU usage! Consider load balancing.',
      };
    }
  };

  const { text, color, range, description } = getStatusDetails(usage);

  return (
    <div className="cpu-usage-container">
      <h3>CPU Usage</h3>
      <div className="cpu-usage-bar">
        <div
          className="cpu-usage-fill"
          style={{ width: `${usage}%`, backgroundColor: color }}
        />
      </div>

      <div className="cpu-usage-info">
        <div className="cpu-usage-usage">
          <strong>{usage}%</strong>
        </div>
        <div className="cpu-usage-status" style={{ color }}>
          <div className="status-text">
            <strong>{text}</strong> <span className="range">({range})</span>
          </div>
          <div className="description big-comment">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CPUUsageChart;
