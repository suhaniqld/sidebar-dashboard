import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";
import getRampAlgorithms from "../services/rampApi";

ChartJS.register(ArcElement, Tooltip);

interface AlgorithmCount {
  [key: string]: number;
}

const algorithmCountObjInitial: AlgorithmCount = {
  "Algorithm 1": 0,
  "Algorithm 2": 0,
  "Algorithm 3": 0,
  "Algorithm 4": 0,
  "Algorithm 5": 0,
};

const RampChart: React.FC = () => {
  const [algorithmCount, setAlgorithmCount] = useState<AlgorithmCount>(
    algorithmCountObjInitial
  );

  useEffect(() => {
    // Update the algorithm count every time new data comes in
    const handleUpdate = (ramps: { id: string; algorithm: string }[]) => {
      const count: AlgorithmCount = {
        "Algorithm 1": 0,
        "Algorithm 2": 0,
        "Algorithm 3": 0,
        "Algorithm 4": 0,
        "Algorithm 5": 0,
      };

      ramps.forEach((ramp) => {
        count[ramp.algorithm]++;
      });

      setAlgorithmCount(count);
    };

    // Fetch the data
    getRampAlgorithms(handleUpdate);
  }, []);

  // Prepare chart data based on algorithm count
  const data = {
    labels: [
      "Algorithm 1",
      "Algorithm 2",
      "Algorithm 3",
      "Algorithm 4",
      "Algorithm 5",
    ],
    datasets: [
      {
        data: [
          algorithmCount["Algorithm 1"],
          algorithmCount["Algorithm 2"],
          algorithmCount["Algorithm 3"],
          algorithmCount["Algorithm 4"],
          algorithmCount["Algorithm 5"],
        ],
        backgroundColor: [
          "#8fbc8f",
          "#90ee90",
          "#3cb371",
          "#009f6b",
          "#e9ffdb",
        ],
      },
    ],
  };

  // Configure chart options
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="ramp-chart">
      <p className="chart-heading">RAMP CHART</p>
      {/* Hover over the chart to see % labels tooltip */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RampChart;
