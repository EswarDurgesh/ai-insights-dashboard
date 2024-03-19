import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface Props {
  // Modify the prop type to include the day-wise data
  data: { date: string; average_time: number }[];
}

const ResponseTimesChart: React.FC<Props> = ({ data }) => {
  // Prepare data for chart

  // Alternatively, you can define the data directly here
  const chartData = [
    { date: '2023-05-01', average_time: 0.4 },
    { date: '2023-05-02', average_time: 0.42 },
    { date: '2023-05-03', average_time: 0.35 },
    { date: '2023-05-04', average_time: 0.5 },
    { date: '2023-05-05', average_time: 0.47 },
  ];

  return (
    <div className="response-times-chart">
      <h3>Response Times (Daily)</h3>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ResponseTimesChart;
