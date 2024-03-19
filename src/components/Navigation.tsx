// Import React library and Navigation component styles
import React from 'react';
import '../styles/Navigation.css';

// Define props interface for Navigation component
interface NavigationProps {
  onMenuClick: (chartName: string) => void; // Function to handle menu item click event
  selectedChart: string; // Current selected chart name
}

// Define the Navigation functional component
const Navigation: React.FC<NavigationProps> = ({ onMenuClick, selectedChart }) => {
  // Render the navigation menu with clickable menu items
  return (
    <nav className="navigation">
      <ul>
        {/* Category Distribution menu item */}
        <li onClick={() => onMenuClick('CategoryDistributionChart')} className={selectedChart === 'CategoryDistributionChart' ? 'selected category-distribution' : ''}>Category Distribution</li>
        {/* Response Times menu item */}
        <li onClick={() => onMenuClick('ResponseTimesChart')} className={selectedChart === 'ResponseTimesChart' ? 'selected response-times' : ''}>Response Times</li>
        {/* Usage Statistics menu item */}
        <li onClick={() => onMenuClick('UsageStatisticsChart')} className={selectedChart === 'UsageStatisticsChart' ? 'selected usage-statistics' : ''}>Usage Statistics</li>
        {/* User Satisfaction menu item */}
        <li onClick={() => onMenuClick('UserSatisfactionChart')} className={`user-satisfaction ${selectedChart === 'UserSatisfactionChart' ? 'selected' : ''}`}>User Satisfaction</li>
      </ul>
    </nav>
  );
}

// Export the Navigation component
export default Navigation;
