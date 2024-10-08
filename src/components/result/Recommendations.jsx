import React from 'react'
import WeatherButton from './WeatherButton'
import { useWeather } from '../../Context/WeatherContext'
import UseWeatherMain from '../../handling/weather/main/UseWeatherMain';
import UseWeatherDesktop from '../../handling/weather/main/useWeatherDesktop';


const Recommendations = () => {
  const { weatherData} = useWeather();

  return (
    <>
        <div className='flex flex-col gap-1 justify-center items-center'>
            <div className='flex flex-col gap-4'>
            <p className='text-white text-xs text-center'>Click any weather info to see recommendations.</p>
            <div className='flex flex-col gap-2 xl:flex xl:flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2'>
                <WeatherButton 
                main = {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)} 
                value={null} 
                icon = {<img src='./src/assets/weather-icons/flat/10d.svg'/>}
                onClick={() => { UseWeatherMain(); UseWeatherDesktop(); }}
                />
                <WeatherButton 
                main = 'Feels like' 
                description={`${Math.round(weatherData.main.feels_like)} °c`} 
                value={`${Math.round(weatherData.main.feels_like)}°c`} 
                icon = {<img src='./src/assets/weather-icons/flat/temp.svg'/>} 
                />
                <WeatherButton 
                main = 'Wind speed' 
                description={`${Math.round(weatherData.wind.speed * 3.6)} km/h`} 
                value={`${Math.round(weatherData.wind.speed * 3.6)} km/h`}  
                icon = {<img src='./src/assets/weather-icons/flat/wind.svg'/>} 
                />
                <WeatherButton 
                main = 'Humidity' 
                description={`${weatherData.main.humidity} %`} 
                value='74%' 
                icon = {<img src='./src/assets/weather-icons/flat/humidity.svg'/>} 
                />
            </div>
            </div>
            {/* <div>
            <Button className={'text-secondary bg-transparent underline text-sm font-light'} text = 'View all recommendations'/>
            </div> */}
        </div>
    </>
  )
}

export default Recommendations