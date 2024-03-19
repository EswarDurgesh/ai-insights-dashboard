// CategoryDistributionChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CategoryDistributionChart: React.FC = () => {
  // Data for the chart
  const data = [
    { name: 'Small Talk', value: 300 },
    { name: 'Technical Support', value: 450 },
    { name: 'Sales Inquiries', value: 350 },
    { name: 'Customer Service', value: 400 },
  ];

  return (
    <div>
      <h2>Category Distribution</h2>
      <BarChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CategoryDistributionChart;
