import { useRef, useEffect, useState } from 'react';
import { Chart as ReactChart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartData,
  ChartArea,
//   LineController,
//   ChartTypeRegistry,
} from 'chart.js';


import styled from '@emotion/styled';

// const CHART_HEIGHT = 408;
// //adjust both CHART_HEIGHT constant and ChartContainer style when changing chart height
const ChartContainer = styled.div`
position: relative;
height: 200px;
width: 100%;

`;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, {
  id: 'uniqueid5', //typescript crashes without id
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
//   afterDraw: function (chart: any) {
    // if (chart.tooltip?._active && chart.tooltip?._active.length) {
    //   const activePoint = chart.tooltip?._active[0];
    //   const ctx = chart.ctx;
    //   const verticalStrokeGradient = ctx.createLinearGradient(0, 0, 0, CHART_HEIGHT);
    //   verticalStrokeGradient.addColorStop(1, '#C87DEE00');
    //   verticalStrokeGradient.addColorStop(0.5, '#B045E680');
    //   verticalStrokeGradient.addColorStop(0, '#AA00FF');
    //   const x = activePoint.element.x;
    //   let offset;
    //   if (chart.tooltip.dataPoints[0].element.y < 100) {
    //     offset = 50;
    //   } else {
    //     offset = 90;
    //   }
    //   const topY = chart.scales.y.top + chart.tooltip.y - offset;
    //   const bottomY = chart.scales.y.bottom;
    //   ctx.save();
    //   ctx.beginPath();
    //   ctx.moveTo(x, topY);
    //   ctx.lineTo(x, bottomY);
    //   ctx.lineWidth = 1;
    //   ctx.strokeStyle = verticalStrokeGradient;
    //   ctx.stroke();
    //   ctx.globalCompositeOperation = 'destination-over';

    //   ctx.restore();
//     }
//   },
//   afterUpdate: function (chart: any) {
//     const datasets = chart.data.datasets;
//     for (let d = 0; d < datasets.length; d++) {
//       const dataset = datasets[d];
//       const meta = chart.getDatasetMeta(d);
//       console.log('meta', 'dataset', meta, dataset);
//       meta._clip.left = 30;
//       meta._clip.right = 30;
//       meta._clip.top = 30;
//       meta._clip.bottom = 30;
//     }
//   },
});



function createGradient(ctx: any, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  

  gradient.addColorStop(0, '#4CDFE8');
  gradient.addColorStop(0.3, '#4CDFE8');
  gradient.addColorStop(0.9, '#7947F7');
  gradient.addColorStop(1, '#7947F7');

  return gradient;
}

export default function MonthlyBalanceChart({ data, labels }: { data: number[]; labels: string[] }) {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }
    const chartData = {
      labels: labels,

      datasets: [
        {
          data: data,
          borderColor: createGradient(chart.ctx, chart.chartArea),
          tension: 0,
        },
      ],
    };

    setChartData(chartData);
  }, []);

  const maxDataValue = data.reduce((a, b) => Math.max(a, b));
  const minDataValue = data.reduce((a, b) => Math.min(a, b));
//   function roundNum(num: number) {
//     return Math.round(num / 1) * 1;
//   }

  const yMax = 1.2 * maxDataValue;
  const yMin = minDataValue - 0.2 * maxDataValue;
  const stepSize = yMax - maxDataValue;

  return (
    <ChartContainer>
      <ReactChart
        ref={chartRef}
        options={{
          interaction: {
            mode: 'index',
            intersect: false,
          },
          layout: {
            padding: {
            //   right: 20,
            },
          },
          scales: {
            y: {
              grid: { display: true, drawBorder: false, borderDash: [4], color:'#DCE3EB', borderDashOffset: 0.2, offset:true },
              max: yMax,
              min: yMin,
              ticks: {
                stepSize: stepSize,
                padding: 10,

                // callback: function (value, index) {
                //   const tRange = yMax - yMin;
                //   const ticksLength = roundNum(tRange / stepSize);

                //   if (index === ticksLength - 1) {
                //     return(maxDataValue);
                //   } else if (index === 1) {
                //     return (minDataValue);
                //   }
                //   return null;
                // },
              },
            },
            x: {
            //   offset: true,
              grid: { display: false, drawBorder: false },
            //   ticks: { padding: 17.2 },
            },
          },
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0,
              hoverRadius: 0,
              borderWidth: 0,
              hoverBorderWidth: 0,
            },
          },
          plugins: {
            legend:{display: false}
          }, 
          responsive: true,
        }}
        type={'line'}
        data={chartData}
      />
    </ChartContainer>
  );
}
