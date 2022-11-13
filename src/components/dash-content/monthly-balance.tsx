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

} from 'chart.js';


import styled from '@emotion/styled';


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


  return (
    <ChartContainer>
      <ReactChart
        ref={chartRef}
        options={{
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            y: {
              grid: { display: true, drawBorder: false, borderDash: [4], color:'#DCE3EB', borderDashOffset: 0.2, offset:true },
            },
            x: {
              grid: { display: false, drawBorder: false },
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