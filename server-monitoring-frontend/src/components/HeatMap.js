import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './HeatMap.css'; // or your relevant CSS file

const HeatMap = () => {
  const data = {
    labels: ['Clear', 'Trouble', 'Critical'],
    datasets: [
      {
        data: [55, 15, 30],
        backgroundColor: ['#00c9a7', '#ff9800', '#f44336'],
        hoverBackgroundColor: ['#00c9a7', '#ff9800', '#f44336'],
      },
    ],
  };

  return (
    <div className="heatmap-container">
      <h3 className="heatmap-title">Heat Map</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default HeatMap;
