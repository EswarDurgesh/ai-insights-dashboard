// Import React library and necessary components from Recharts library
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// Define the CategoryDistributionChart functional component
const CategoryDistributionChart: React.FC = () => {
  // Data for the chart, representing the distribution of categories
  const data = [
    { name: 'Small Talk', value: 300 },
    { name: 'Technical Support', value: 450 },
    { name: 'Sales Inquiries', value: 350 },
    { name: 'Customer Service', value: 400 },
  ];

  // Render the Category Distribution chart using Recharts components
  return (
    <div>
      <h2>Category Distribution</h2>
      {/* Render BarChart component */}
      <BarChart width={600} height={400} data={data}>
        {/* Render X-axis with category names */}
        <XAxis dataKey="name" />
        {/* Render Y-axis */}
        <YAxis />
        {/* Render Tooltip for displaying information on hover */}
        <Tooltip />
        {/* Render Legend for displaying data key */}
        <Legend />
        {/* Render Bar component to represent data values */}
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

// Export the CategoryDistributionChart component
export default CategoryDistributionChart;
