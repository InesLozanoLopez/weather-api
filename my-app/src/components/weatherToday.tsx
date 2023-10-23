import { weatherContext } from "@/context";
import { useContext } from "react";
import Image from "next/image";
import { formatDate, celciusToFahrenheit } from "@/functions";

export default function WeatherToday() {
    const weatherContextData = useContext(weatherContext);
    const weatherData = weatherContextData.weatherData;
    const { tempCelsius, temperatureUnits } = useContext(weatherContext);

    if(!weatherData){
        return null
    }

    const weatherToday = weatherData.forecast.forecastday[0];
    const date = formatDate(weatherToday.date)


    const handleOnClick = () => {
        temperatureUnits(tempCelsius)
    }

    const temperature = tempCelsius ?
        weatherToday.day.avgtemp_c :
        celciusToFahrenheit(weatherToday.day.avgtemp_c);
    
    console.log('weatherToday', weatherToday)
    console.log('icon', weatherToday.day.condition.icon)

    return (
        <>
            <div className="todayContentBox">
                <div className='locationInfo'>
                    {`Results for: ${weatherData.location.name}, ${weatherData.location.country}`}
                </div>
                <div className="gridContent">
                    <Image
                        className="weatherIcon"
                        src={weatherToday.day.condition.icon}
                        aria-label={`${weatherToday.day.condition.text} icon`}
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
                        `Precipitation: ${weatherToday.day.daily_chance_of_rain}%`
                        `Wind Speed: ${weatherToday.day.avgvis_miles}mph/h`
                        `Humidity: ${weatherToday.day.avghumidity}%`
                    </div>
                    <div className="timeAndDescription">
                        {date}
                        {weatherToday.day.condition.text}
                    </div>
                </div>
            </div>
        </>
    )
};

