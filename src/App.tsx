import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import CategoryDistributionChart from './components/CategoryDistributionChart';
import ResponseTimesChart from './components/ResponseTimesChart';
import UsageStatisticsChart from './components/UsageStatisticsChart';
import UserSatisfactionChart from './components/UserSatisfactionChart';
import './styles/App.css';

// Define the UserSatisfactionData interface
interface UserSatisfactionData {
  rating: number;
  count: number;
}

/**
 * App component represents the main application.
 * It manages the state of various chart data and renders the appropriate chart based on user selection.
 */
const App: React.FC = () => {
  // State variables to hold chart data
  const [responseTimesData, setResponseTimesData] = useState<{ date: string; average_time: number }[]>([]);
  const [usageStatisticsData, setUsageStatisticsData] = useState<{
    by_platform: { [platform: string]: number };
    by_country: { [country: string]: number };
  }>({
    by_platform: { iOS: 600, Android: 700, Web: 200 },
    by_country: { USA: 800, India: 250, Germany: 150, Japan: 100, Brazil: 200 },
  });
  const [userSatisfactionData, setUserSatisfactionData] = useState<UserSatisfactionData[]>([
    { rating: 1, count: 15 },
    { rating: 2, count: 35 },
    { rating: 3, count: 200 },
    { rating: 4, count: 500 },
    { rating: 5, count: 600 },
  ]);
  const [selectedChart, setSelectedChart] = useState('CategoryDistributionChart');

  // Fetch response times data from API on component mount
  useEffect(() => {
    const fetchResponseTimesData = async () => {
      try {
        const response = await fetch('https://example.com/response-times-data');
        const data = await response.json();
        setResponseTimesData(data);
      } catch (error: any) {
        console.error('Error fetching response times data:', error.message);
      }
    };

    fetchResponseTimesData();
  }, []);

  // Function to handle menu clicks and update selectedChart state
  const handleMenuClick = (chartName: string) => {
    setSelectedChart(chartName);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        {/* Render Navigation component and pass selected chart and menu click handler */}
        <Navigation onMenuClick={handleMenuClick} selectedChart={selectedChart} />
        <main className="main-content">
          {/* Render the selected chart based on selectedChart state */}
          {selectedChart === 'CategoryDistributionChart' && <CategoryDistributionChart />}
          {selectedChart === 'ResponseTimesChart' && <ResponseTimesChart data={responseTimesData} />}
          {selectedChart === 'UsageStatisticsChart' && <UsageStatisticsChart data={usageStatisticsData} />}
          {selectedChart === 'UserSatisfactionChart' && <UserSatisfactionChart data={userSatisfactionData} />}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
