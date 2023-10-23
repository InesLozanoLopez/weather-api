import { weatherContext } from "@/context";
import { useContext } from "react";
import { IWeatherData } from '@/interfaces'
import FutureDay from '@/components/futureDay'

export default function WeatherFuture() {
    const weatherContextData = useContext(weatherContext);
    const weatherData = weatherContextData.weatherData;

    return (
        <>
            {weatherData && (
                <div className="todayContentBox">
                    {weatherData.map((weatherDay: IWeatherData) => (
                        <li key={weatherDay.location.localtime}>
                            <FutureDay weatherDay={weatherDay} />
                        </li>
                    ))}
                </div>
            )}
        </>
    )
};
