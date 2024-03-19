// components/Navigation.tsx

import React from 'react';
import '../styles/Navigation.css';

interface NavigationProps {
  onMenuClick: (chartName: string) => void;
  selectedChart: string; // Add selectedChart prop to receive the selected chart name
}

const Navigation: React.FC<NavigationProps> = ({ onMenuClick, selectedChart }) => {
  return (
    <nav className="navigation">
      <ul>
        <li onClick={() => onMenuClick('CategoryDistributionChart')} className={selectedChart === 'CategoryDistributionChart' ? 'selected category-distribution' : ''}>Category Distribution</li>
        <li onClick={() => onMenuClick('ResponseTimesChart')} className={selectedChart === 'ResponseTimesChart' ? 'selected response-times' : ''}>Response Times</li>
        <li onClick={() => onMenuClick('UsageStatisticsChart')} className={selectedChart === 'UsageStatisticsChart' ? 'selected usage-statistics' : ''}>Usage Statistics</li>
        <li onClick={() => onMenuClick('UserSatisfactionChart')} className={`user-satisfaction ${selectedChart === 'UserSatisfactionChart' ? 'selected' : ''}`}>User Satisfaction</li>
      </ul>
    </nav>
  );
}

export default Navigation;
