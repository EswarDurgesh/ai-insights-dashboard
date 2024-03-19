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

const App: React.FC = () => {
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

  const handleMenuClick = (chartName: string) => {
    setSelectedChart(chartName);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        {/* Pass selectedChart prop to the Navigation component */}
        <Navigation onMenuClick={handleMenuClick} selectedChart={selectedChart} />
        <main className="main-content">
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
