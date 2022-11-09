import React from "react";

import { Bar, Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },

    beforeDraw: (chart: any) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "yellow";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  },
};

type Props = {
  label: string;
  color: string;
  data: Array<number>;
};

const AccountSummaryBarChart: React.FC<Props> = ({
  label,
  color,
  data,
}: Props) => {
  const charData = {
    datasets: [
      {
        label,
        data,
        backgroundColor: color,
      },
    ],
  };
  return (
    <Bar
      style={{
        backgroundColor: "transparent",
      }}
      data={charData}
      options={options}
    />
  );
};

export default AccountSummaryBarChart;
