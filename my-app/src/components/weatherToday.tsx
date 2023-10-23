import { weatherContext } from "@/context";
import { useContext } from "react";
import Image from "next/image";
import { formatDate, celciusToFahrenheit } from "@/functions";

export default function WeatherToday() {
    const weatherContextData = useContext(weatherContext);
    const weatherData = weatherContextData.weatherData;

    const { tempCelsius, temperatureUnits } = useContext(weatherContext);


    const weatherToday = weatherData[0]
    const date = formatDate(weatherToday.forecast.forecastday.date)


    const handleOnClick = () => {
        temperatureUnits(tempCelsius)
    }

    const temperature = tempCelsius ?
        weatherToday.forecast.forecastday.day.avgtemp_c :
        celciusToFahrenheit(weatherToday.forecast.forecastday.day.avgtemp_c);




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
                        src={weatherToday.forecast.forecastday.condition.icon}
                        aria-label={`${weatherToday.forecast.forecastday.condition.text} icon`}
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
                        `Precipitation: ${weatherToday.forecast.forecastday.day.daily_chance_of_rain}%`
                        `Wind Speed: ${weatherToday.forecast.forecastday.day.avgvis_miles}mph/h`
                        `Humidity: ${weatherToday.forecast.forecastday.day.avghumidity}%`
                    </div>
                    <div className="timeAndDescription">
                        {date}
                        {weatherToday.forecast.forecastday.condition.text}
                    </div>
                    )
                </div>
            </div>)
        </>
    )
};

