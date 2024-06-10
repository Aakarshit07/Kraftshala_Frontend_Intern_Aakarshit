import { useState, useEffect } from 'react';
import { API_ID } from '../utils/constants.js';

/**
 * useWeather is a custom hook that fetches weather information from the OpenWeatherMap API.
 *
 * @param {string} location - The location to fetch weather information for.
 * @returns {Object} - An object containing the weather data, any error that occurred, and a loading state.
 */
const useWeather = (location) => {
  // State to hold the weather data.
  const [weather, setWeather] = useState(null);
  
  // State to hold any error that occurred.
  const [error, setError] = useState(null);
  
  // State to hold the loading state.
  const [loading, setLoading] = useState(false);

   /**
   * Fetches weather information from the OpenWeatherMap API.
   *
   * @returns {void}
   */
  useEffect(() => {
    if (!location) return;
    
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_ID}`);
        if (!response.ok) {
          throw new Error('Enter Valid City Name or Zip Code');
        }
        const data = await response.json();
        console.log("Weather Data",data)
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchWeather();
  // Fetch weather data when the location changes.  
  }, [location]);
  // Return the weather data, error, and loading state.
  return { weather, error, loading };
};

export default useWeather;
