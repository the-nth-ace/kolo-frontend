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
  afterDraw: function (chart: any) {
    if (chart.tooltip?._active && chart.tooltip?._active.length) {
      const activePoint = chart.tooltip?._active[0];
      const ctx = chart.ctx;
      const verticalStrokeGradient = ctx.createLinearGradient(
        0,
        0,
        0,
        CHART_HEIGHT
      );
      verticalStrokeGradient.addColorStop(1, "#C87DEE00");
      verticalStrokeGradient.addColorStop(0.5, "#B045E680");
      verticalStrokeGradient.addColorStop(0, "#AA00FF");
      const x = activePoint.element.x;
      let offset;
      if (chart.tooltip.dataPoints[0].element.y < 100) {
        offset = 50;
      } else {
        offset = 90;
      }
      const topY = chart.scales.y.top + chart.tooltip.y - offset;
      const bottomY = chart.scales.y.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = verticalStrokeGradient;
      ctx.stroke();
      ctx.globalCompositeOperation = "destination-over";

      ctx.restore();
    }
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
