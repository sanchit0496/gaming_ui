import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "./Graph.scss"
import 'chart.js/auto';

const Graph = () => {
  const [dataPoints, setDataPoints] = useState([
    65, 59, 80, 81, 56, 55, 40, 23, 55, 49, 102, 499, 203, 220, 240, 290, 108,
    424, 418, 362, 331, 153, 254, 373, 191, 217, 253, 232, 225, 228, 170, 155,
    206, 448, 146, 345, 234, 442, 405, 148, 120, 414, 397, 168, 171, 426, 389,
    158, 432, 342, 299, 289, 314, 54, 317, 335, 323, 388, 88, 90, 204, 245,
  ]);
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
        label: 'Crypto Data',
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
        ticks: {
          color: 'white', // Set Y-axis labels to white
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Optional: Adjust grid line color for visibility
        }
      },
    },
    animation: {
      duration: 500, // Adjust for smoother transitions
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white' // Optional: Adjust legend text to white if needed
        }
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  

  return(
    <div className= 'graph-container'>
        <Line data={data} options={options} />
    </div>
  )
};

export default Graph;
