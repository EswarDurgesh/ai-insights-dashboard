import data from '../data/ai-data.json';

// Option 1: Using static data (if applicable)
export const fetchAIData = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(data), 1000)); // Simulating delay
};

// Option 2: Simulating API call (if applicable)
// export const fetchAIData = async () => {
//   const response = await fetch('your_api_endpoint'); // Replace with actual API endpoint
//   const data = await response.json();
//   return data;
// };
