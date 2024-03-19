import React from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';

// Define interface for user satisfaction data
interface UserSatisfactionData {
  rating: number;
  count: number;
}

// Define props interface for UserSatisfactionChart component
interface Props {
  data: UserSatisfactionData[];
}

// Define the UserSatisfactionChart functional component
const UserSatisfactionChart: React.FC<Props> = ({ data }) => {
  // Define chart data with default values if no data is provided
  const chartData: UserSatisfactionData[] = data || [
    { rating: 1, count: 15 },
    { rating: 2, count: 35 },
    { rating: 3, count: 200 },
    { rating: 4, count: 500 },
    { rating: 5, count: 600 },
  ];

  // Define an array of colors for each rating
  const colors = ['#0088FE', '#90EE90', '#FFBB28', '#FF8042', '#8884D8'];

  // Render the UserSatisfactionChart component
  return (
    <div className="user-satisfaction-chart">
      <h3>User Satisfaction</h3>
      <PieChart width={600} height={300}>
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="rating"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {/* Loop through data and assign colors */}
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

// Export the UserSatisfactionChart component
export default UserSatisfactionChart;
