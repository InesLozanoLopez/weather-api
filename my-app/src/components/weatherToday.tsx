import { weatherContext } from "@/context";
import { useContext } from "react";
import Image from "next/image";
import { formatDate, celciusToFahrenheit } from "@/functions";

export default function WeatherToday() {
    const weatherContextData = useContext(weatherContext);
    const weatherData = weatherContextData.weatherData;

    const { tempCelsius, temperatureUnits } = useContext(weatherContext);


    const weatherToday = weatherData[0]
    const date = formatDate(weatherToday.location.localtime)


    const handleOnClick = () => {
        temperatureUnits(tempCelsius)
    }

    const temperature = tempCelsius ?
        weatherToday.current.temperature :
        celciusToFahrenheit(weatherToday.current.temperature);




    return (
        <>
            (weatherToday && (
            <div className="todayContentBox">
                <div className='locationInfo'>
                    {`Results for: ${weatherToday.location.name}, ${weatherToday.location.country}`}
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
                        `Temperature: ${temperature}`
                        <button
                            onClick={handleOnClick}>
                            {tempCelsius ? "F" : "C"}
                        </button>
                    </div>

                    <div className="weatherInfo">
                        `Precipitation: ${weatherToday.current.precip}`
                        `Wind Speed: ${weatherToday.current.wind_speed}``
                        `Humidity: ${weatherToday.current.humidity}``
                    </div>
                    <div className="timeAndDescription">
                        {date}
                        {weatherToday.current.weather_descriptions}
                    </div>
                    )
                </div>
            </div>)
        </>
    )
};

