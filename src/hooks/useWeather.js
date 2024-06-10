import { useState, useEffect } from 'react';
import { API_ID } from '../utils/constants.js';

const useWeather = (location) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, [location]);

  return { weather, error, loading };
};

export default useWeather;
