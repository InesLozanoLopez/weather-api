import { weatherContext } from "@/context";
import { useContext } from "react";
import Image from "next/image";
import { formatDayOfWeek } from "@/functions/dateFormatFunctions.tsx";
import { temperatureToggle } from "@/functions/temperatureFunctions";


export default function WeatherToday() {
    const weatherData = useContext(weatherContext).weatherData;
    const { tempCelsius, temperatureUnits } = useContext(weatherContext);

    if (!weatherData) {
        return null
    }

    const weatherToday = weatherData.forecast.forecastday[0];
    const date = formatDayOfWeek(weatherToday.date)


    const handleOnClick = () => {
        temperatureUnits(tempCelsius)
    }

    const temperature = temperatureToggle({ tempCelsius: tempCelsius, temperature: weatherToday.day.avgtemp_c })


    console.log('weatherToday', weatherToday)
    console.log('icon', weatherToday.day.condition.icon)

    return (
        <>
            <div className="todayContentBox">
                <div className='locationInfo'>
                    {`Results for: ${weatherData.location.name}, ${weatherData.location.country}`}
                </div>
                <div className="tempUnitsToggle">
                    <button
                        onClick={handleOnClick}
                        className={tempCelsius ? 'lightColor' : ''}>
                        Farenheign
                    </button>
                    <button
                        onClick={handleOnClick}
                        className={!tempCelsius ? 'lightColor' : ''}>
                        Celcius
                    </button>
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
                        Temperature: ${temperature} ${tempCelsius ? "F" : "C"}
                    </div>

                    <span className='verticalLine'></span>


                    <div className="weatherInfo">
                        <div>Precipitation: ${weatherToday.day.daily_chance_of_rain}%</div>
                        <div>Wind Speed: ${weatherToday.day.avgvis_miles}mph/h</div>
                        <div>Humidity: ${weatherToday.day.avghumidity}%</div>
                    </div>
                    <div className="timeAndDescription">
                        <div>{date}</div>
                        <div>{weatherToday.day.condition.text}</div>
                    </div>
                </div>
            </div>
        </>
    )
};

