import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { LineChart, LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { AllSeriesType, DefaultizedPieValueType } from '@mui/x-charts/models';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export { BasicBars, BasicPieChart, BasicLineChart };

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


type BasicBarsProps = {
  title: string;
  description?: string;
  apiData: any[];
  labelKey?: string; // which key to use for x-axis labels
  seriesKeys?: string[]; // which keys to use for bar series
};

function BasicBars({ // still buggy
  title,
  description,
  apiData,
  labelKey = 'name', // default to 'name'
  seriesKeys = ['value'], // default to 'value'
}: BasicBarsProps) {
  // Handle loading or empty data
  if (!apiData || !Array.isArray(apiData) || apiData.length === 0) {
    return <Typography>No data available.</Typography>;
  }

  // Use labelKey for x-axis labels
  const labels = apiData.map((item) => item[labelKey]);

  // Map each seriesKey to a bar series
  const chartSeries = seriesKeys.map((key) => ({
    label: key,
    data: apiData.map((item) => Number(item[key] ?? 0)),
  }));

  return (
    <div
      // style={{
      //   padding: '20px',
      //   margin: '20px',
      //   border: '1px solid lightgray',
      //   borderRadius: '8px',
      // }}
    >
      <Typography variant="h6" style={{ textAlign: 'center' }}>{title}</Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" gutterBottom style={{ textAlign: 'center' }}>
          {description}
        </Typography>
      )}
      <BarChart xAxis={[{ data: labels }]} series={chartSeries} height={400} width={1000} style={{ padding: '10px', margin: '10px', border: '1px solid lightgray', borderRadius: '8px' }} />
    </div>
  );
}
/**
 * BasicBars component
 *
 * Props:
 * - title: string - Chart title
 * - description: string - Chart description (optional)
 * - apiData: any[] - Raw API data array (each item should have 'name' and 'value' keys)
 *
 * Usage:
 * <BasicBars
 *   title="Sales Overview"
 *   description="Monthly sales data"
 *   apiData={apiDataFromApi}
 * />
 *
 * The component will automatically map the raw data to the required chart format.
 *
 * ----------------------------------------------------------------------
 * Usage Example:
 * <BasicBars
 *   title="Current Stock"
 *   description="Stock and Required per product"
 *   apiData={Data}
 *   labelKey="product_name"
 *   seriesKeys={["stock", "required", "price"]} // show multiple bars per product
 * />
 **/

// ----------------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export default function BasicLineChart() {
  return (
    <LineChart
      style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid lightgray',
        borderRadius: '8px',
        width: '90%',
      }}
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

const data = [
  // mock data
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: false,
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
