import { useState } from 'react';
import WeatherSearch from '../components/WeatherSearch';
import WeatherDisplay from '../components/WeatherDisplay';
import useWeather from '../hooks/useWeather.js';
import Loading from '../components/Loading.jsx';


const Home = ({darkMode, setDarkMode}) => {

    const [location, setLocation] = useState('');
    const { weather, error, loading } = useWeather(location);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
          <div className="container mx-auto p-4">
            <button onClick={toggleDarkMode} className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-lg">
            {darkMode ? 'Light 🌞' : 'Dark 🌙'}
            </button>
            <WeatherSearch onSearch={setLocation} />
            <div className='my-6 flex justify-center items-center w-1/2'>
                {loading && <Loading />}
            </div>
            <div className='my-4'>
                {error && <p className="text-red-500">{error}</p>}
                {weather && <WeatherDisplay weather={weather} />}
            </div>
          </div>
        </div>
    );
}

export default Home