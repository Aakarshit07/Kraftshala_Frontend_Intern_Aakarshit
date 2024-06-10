import { getFormattedDateTime, iconUrl } from "../utils/constants";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;
  const { name, main, weather: weatherDetails, sys, visibility, wind} = weather;

  const temperature = (main.temp - 273.15).toFixed(0); // Convert Kelvin to Celsius
  const dateAndTime = getFormattedDateTime();
  const iconCode = weatherDetails[0]?.icon;

  const WeatherIcon = `${iconUrl}${iconCode}@2x.png`;


  return (
    <div className="p-4 bg-white text-black dark:bg-gray-800 rounded-lg shadow-md w-1/2">
        <div className="my-2">
            <p className="text-md font-sans font-semibold text-rose-500 text-left ">{dateAndTime}</p>
            <h2 className="text-4xl font-bold font-mono text-gray-900 my-2">{name}, {sys?.country}</h2>
        </div>
        <div className="flex items-center justify-start my-2">
            <img className="w-14" src={WeatherIcon} alt={name} />
            <p className="text-5xl font-mono text-gray-900">{temperature}°C</p>
        </div>
        <p className="text-md font-mono font-semibold text-gray-900 my-2">Feels like {temperature}°C, {weatherDetails[0]?.description}. {weatherDetails[0]?.main}</p>
        <div className="border-l-2 border-rose-500 px-2 my-2">
            <div className="font-mono font-sans">
                <p>Humidity: { main?.humidity && `${main?.humidity}%`}</p>
                <p>Wind: { wind?.speed && `${wind?.speed}m/s`} WSW</p>
                <p>Visibility: {visibility && `${visibility/100}km`} </p>
            </div>
        </div>
    </div>
  );
};

export default WeatherDisplay;
