import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = () => {
  const [dataPoints, setDataPoints] = useState([65, 59, 80, 81, 56, 55, 40, 23,55,49,102,499,203,220,240,290]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(currentData => {
        const newData = [...currentData, Math.floor(Math.random() * 100)].slice(-7);
        return newData;
      });
      setTick(tick => tick + 1); // Increment tick to force re-render
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: dataPoints.map((_, i) => `${tick + i}`), // Dynamically create labels based on tick
    datasets: [
      {
        label: 'Dynamic Data',
        data: dataPoints,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // This hides the X-axis
      },
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 100, // Adjust for smoother transitions
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return <div style={{ height: '400px' }}><Line data={data} options={options} /></div>;
};

export default Graph;
