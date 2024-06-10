import { useState } from 'react';
import WeatherSearch from '../components/WeatherSearch';
import WeatherDisplay from '../components/WeatherDisplay';
import useWeather from '../hooks/useWeather.js';
import Loading from '../components/Loading.jsx';


/**
 * Home component that displays the weather for a given location.
 * @param {boolean} darkMode - Whether the app is in dark mode or not.
 * @param {function} setDarkMode - Function to toggle between dark and light mode.
 * @returns {JSX.Element} The Home component.
 */
const Home = ({darkMode, setDarkMode}) => {
    // State for the location input
    const [location, setLocation] = useState('');
    // Get the weather data for the given location
    const { weather, error, loading } = useWeather(location);

    /**
     * Toggles between dark and light mode.
     */
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
          <div className="container mx-auto p-4">
            {/* Button to toggle between dark and light mode */}
            <button onClick={toggleDarkMode} className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
            {darkMode ? 'Light 🌞' : 'Dark 🌙'}
            </button>
            {/* Weather search component */}
            <WeatherSearch onSearch={setLocation} />
            {/* Loading spinner */}
            <div className='my-6 flex justify-center items-center sm:w-1/2'>
                {loading && <Loading />}
            </div>
            <div className='my-4'>
                {/* Error message if there is an error */}
                {error && <p className="text-red-500">{error}</p>}
                {/* Weather display component */}
                {weather && <WeatherDisplay weather={weather} />}
            </div>
          </div>
        </div>
    );
}

export default Home