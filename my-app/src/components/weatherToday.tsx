import { weatherContext } from "@/context";
import { useContext } from "react";
import Image from "next/image";

export default function WeatherToday() {
    const weatherContextData = useContext(weatherContext);
    const weatherData = weatherContextData.weatherData;

    const weatherToday = weatherData[0]

    return (
        <>
            (weatherToday && (
            <div className="todayContentBox">
                <div className='locationInfo'>
                    {weatherToday.location.name}, {weatherToday.location.country}
                </div>
                <div className="gridContent">
                    <Image
                        className="weatherIcon"
                        src={weatherToday.current.weather_icons[0]}
                        aria-label={`${weatherToday.current.weather_descriptions} icon`}
                        alt="Weather icon"
                        width={150}
                        height={150}
                        priority={true}
                    />

                    <div className="weatherTemp">
                        {weatherToday.current.temperature}
                    </div>

                    <div className="weatherInfo">
                        {weatherToday.current.precip}
                        {weatherToday.current.wind_speed}
                        {weatherToday.current.humidity}
                    </div>
                    <div className="timeAndDescription">

                        {weatherToday.current.observation_time}
                        {weatherToday.current.weather_descriptions}
                    </div>
                    )
                </div>
            </div>)
        </>
    )
};