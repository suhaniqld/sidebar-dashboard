import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import getRampAlgorithms from "../services/rampApi";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface AlgorithmCount {
  [key: string]: number;
}

const RampChart: React.FC = () => {
  const [algorithmCount, setAlgorithmCount] = useState<AlgorithmCount>({
    "Algorithm 1": 0,
    "Algorithm 2": 0,
    "Algorithm 3": 0,
    "Algorithm 4": 0,
    "Algorithm 5": 0,
  });

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

    // Fetch the data using the provided API
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
          "#66C2A5",
          "#FC8D62",
          "#8DA0CB",
          "#E78AC3",
          "#A6D854",
        ],
        hoverBackgroundColor: [
          "#66C2A5",
          "#FC8D62",
          "#8DA0CB",
          "#E78AC3",
          "#A6D854",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configure chart options
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h3>Ramp Chart</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RampChart;
