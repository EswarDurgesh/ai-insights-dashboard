import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// Define interface for usage statistics data
interface UsageStatisticsData {
  category: string;
  count: number;
}

// Define props interface for UsageStatisticsChart component
interface Props {
  data: {
    by_platform: { [platform: string]: number };
    by_country: { [country: string]: number };
  };
}

// Define the UsageStatisticsChart functional component
const UsageStatisticsChart: React.FC<Props> = ({ data }) => {
  // Define platform usage data manually
  const platformUsageData: UsageStatisticsData[] = [
    { category: 'iOS', count: 600 },
    { category: 'Android', count: 700 },
    { category: 'Web', count: 200 },
  ];

  // Define country usage data manually
  const countryUsageData: UsageStatisticsData[] = [
    { category: 'USA', count: 800 },
    { category: 'India', count: 250 },
    { category: 'Germany', count: 150 },
    { category: 'Japan', count: 100 },
    { category: 'Brazil', count: 200 },
  ];

  // Render the UsageStatisticsChart component
  return (
    <div className="usage-statistics-chart">
      <h3>Usage Statistics</h3>
      <div>
        <h4>By Platform</h4>
        <BarChart width={900} height={400} data={platformUsageData}>
          <XAxis dataKey="category" angle={-45} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#C02940" />
        </BarChart>
      </div>
      <div>
        <h4>By Country</h4>
        <BarChart width={800} height={400} data={countryUsageData}>
          <XAxis dataKey="category" angle={-45} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#C02940" />
        </BarChart>
      </div>
    </div>
  );
};

// Export the UsageStatisticsChart component
export default UsageStatisticsChart;
