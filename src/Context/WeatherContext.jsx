import React, { createContext, useContext, useState } from 'react'

const WeatherContext = createContext()

export const useWeather = () => useContext(WeatherContext);


export const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState(null)
  return (
    <WeatherContext.Provider value={{weatherData, setWeatherData}}>
        {children}
    </WeatherContext.Provider>
  );
};