import React, { useEffect, useRef, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartData,
  ChartOptions,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "@emotion/styled";

const CHART_HEIGHT = "100px";

const ChartContainer = styled.div`
  position: relative;
  height: 100px;
  width: 200px;
`;

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, {
  id: "unique1",
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },

});

export const options: ChartOptions<"bar"> = {
  layout: {
    padding: {
      right: 0,
      left: 0,
      top: 20,
      bottom: 20,
    },
  },
  responsive: true,

  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
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
  // const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });
  const datas = {
    labels: [
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
      label,
    ],

    datasets: [
      {
        categoryThickness: 0.4,
        barPercentage: 0.9,

        label: label,
        data: data,
        backgroundColor: color,
      },
    ],
  };
  return (
    <ChartContainer>
      <Bar data={datas} options={options} />
    </ChartContainer>
  );
};

export default AccountSummaryBarChart;
