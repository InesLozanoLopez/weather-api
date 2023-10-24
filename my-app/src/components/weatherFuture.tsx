import { weatherContext } from "@/context";
import { useContext } from "react";
import { IWeatherDay } from '@/interfaces'
import FutureDay from '@/components/futureDay'

export default function WeatherFuture() {
    const weatherContextData= useContext(weatherContext);
    const weatherData = weatherContextData.weatherData;


    if(!weatherData){
        return null
    }

    const weatherForecast = weatherData.forecast.forecastday;


    return (
        <>
            {weatherData && (
                <div className="todayContentBox">
                    {weatherForecast.map((weatherDay: IWeatherDay) => (
                        <div key={weatherDay.date}>
                            <FutureDay weatherDay={weatherDay} />
                        </div>
                    ))}
                </div>
            )}
        </>
    )
};
