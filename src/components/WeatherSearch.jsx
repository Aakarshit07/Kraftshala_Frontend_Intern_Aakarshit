import { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="flex mb-4 w-1/2">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border w-[80%] text-black border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter city name or zip code"
      />
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
