import React, { useEffect, useState } from 'react'
import UseWeatherMain from '../../handling/weather/main/UseWeatherMain'
import UseWeatherDesktop from '../../handling/weather/main/useWeatherDesktop'
import { useWeather } from '../../Context/WeatherContext'
import fetchWeather from '../../API/FetchWeather'


const SearchResult = () => {
  const { weatherData, setWeatherData } = useWeather();
  const [error, setError] = useState(null);

  const lat = weatherData?.coord?.lat;
  const lon = weatherData?.coord?.lon;

  useEffect(() => {
    const fetchAndUpdateWeather = () => {
      if (lat && lon) {
        fetchWeather(lat, lon, setWeatherData, setError);
      }
    };

    fetchAndUpdateWeather();

    const intervalValue = setInterval(fetchAndUpdateWeather, 300000);

    return () => clearInterval(intervalValue);
  },[lat, lon, setWeatherData]);

  if (error) {
    return (<div className='text-accent text-xs flex flex-col gap-1 justify-center items-center mb-4'>
      {error}
      <button onClick={() => setError(null)} className='underline'>Try again</button>
      </div>
      )
  }
  

  return (
    <>
     <div className='block xl:grid xl:grid-cols-[340px_minmax(0,1fr)] grid-rows-1 gap-0 w-full min-h-screen bg-charcoal'>
      {/* Rendered by MainView, display block on mobile and tablet. On desktop it forms the first part of the grid */}
       <UseWeatherMain />
       {/* Rendered by DesktopView, hidden on mobile and tablet. On desktop it forms the second part of the grid */}
      <UseWeatherDesktop />
    </div>
    </>
  )};

export default SearchResult