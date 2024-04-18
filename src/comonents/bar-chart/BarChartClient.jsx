// BarChart.js
// BarChart.js

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Calories",
              data: data.values,
              backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue color for bars
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 0,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "x",
          barThickness: 3, // Adjust the thickness of the bars here
          // barThickness: "flex",
          categoryPercentage: 1,
          barPercentage: 1,
        },
      });
    }

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
