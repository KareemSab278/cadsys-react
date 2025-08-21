import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import Typography from '@mui/material/Typography';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////// 

export { BasicBars, ComplexBars, BasicPieChart, BasicLineChart };

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////// 

function BasicBars() {
  return (
    <BarChart
      xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={300}
      width={600}
    />
  );
}


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////// 

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BasicLineChart() {
  return (
    <LineChart
      height={300}
      series={[
        { data: pData, label: 'pv', yAxisId: 'leftAxisId' },
        { data: uData, label: 'uv', yAxisId: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[
        { id: 'leftAxisId', width: 50 },
        { id: 'rightAxisId', position: 'right' },
      ]}
    />
  );
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// Mock data
const mockStockData = Array.from({ length: 90 }, (_, i) => ({
  date: `2023-01-${String(i + 1).padStart(2, '0')}`,
  volume: Math.floor(Math.random() * 10000000 + 1000000),
  low: Math.random() * 100 + 50,
  high: Math.random() * 100 + 100,
}));

const series = [
  {
    type: 'bar',
    yAxisId: 'volume',
    label: 'Volume',
    color: 'lightgray',
    data: mockStockData.map((day) => day.volume),
    highlightScope: { highlight: 'item' },
  },
  {
    type: 'line',
    yAxisId: 'price',
    color: 'red',
    label: 'Low',
    data: mockStockData.map((day) => day.low),
    highlightScope: { highlight: 'item' },
  },
  {
    type: 'line',
    yAxisId: 'price',
    color: 'green',
    label: 'High',
    data: mockStockData.map((day) => day.high),
  },
] as AllSeriesType[];

function ComplexBars() {
  return (
    <div style={{ width: '100%' }}>
      <Typography>Alphabet stocks (mock data)</Typography>
      <div>
        <ChartContainer
          series={series}
          height={400}
          xAxis={[
            {
              id: 'date',
              data: mockStockData.map((day) => new Date(day.date)),
              scaleType: 'band',
              valueFormatter: (value) => value.toLocaleDateString(),
              height: 40,
            },
          ]}
          yAxis={[
            { id: 'price', scaleType: 'linear', position: 'left', width: 50 },
            {
              id: 'volume',
              scaleType: 'linear',
              position: 'right',
              valueFormatter: (value) => `${(value / 1000000).toLocaleString()}M`,
              width: 55,
            },
          ]}
        >
          <ChartsAxisHighlight x="line" />
          <BarPlot />
          <LinePlot />
          <LineHighlightPlot />
          <ChartsXAxis
            label="Date"
            axisId="date"
            tickInterval={(value, index) => {
              return index % 30 === 0;
            }}
            tickLabelStyle={{
              fontSize: 10,
            }}
          />
          <ChartsYAxis
            label="Price (USD)"
            axisId="price"
            tickLabelStyle={{ fontSize: 10 }}
          />
          <ChartsYAxis
            label="Volume"
            axisId="volume"
            tickLabelStyle={{ fontSize: 10 }}
          />
          <ChartsTooltip />
        </ChartContainer>
      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////// 

const data = [ // mock data
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

function BasicPieChart() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////// 

// export { BasicBars, ComplexBars, BasicPieChart };