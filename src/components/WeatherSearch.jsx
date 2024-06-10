import { useState } from 'react';

/**
 * WeatherSearch is a component that allows the user to search for weather information by city name or zip code.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.onSearch - The function to call when the user searches for weather information.
 * @returns {JSX.Element} The rendered component.
 */
const WeatherSearch = ({ onSearch }) => {
  // State to hold the user's search input.
  const [location, setLocation] = useState('');

  /**
   * Calls the onSearch function with the user's search input and resets the search input state.
   * 
   * @returns {void}
   */
  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="flex mb-4 sm:w-1/2">
      {/* Input field for the user to enter their search query. */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border w-[80%] text-black border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter city name or zip code"
      />
      {/* Button to trigger the search. */}
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 w-[20%] text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring"
      >
        Search
      </button>
    </div>
  );
};

export default WeatherSearch;
