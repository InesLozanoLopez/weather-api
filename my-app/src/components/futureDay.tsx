import { IWeatherData } from '@/interfaces'
import { formatDate, celciusToFahrenheit } from "@/functions";
import Image from "next/image";
import { weatherContext } from '@/context';
import {useContext} from 'react';

export default function FutureDay({weatherDay}: {weatherDay: IWeatherData}) {
    const date = formatDate(weatherDay.forecast.forecastday.date);
    
    const tempCelsius  = useContext(weatherContext);


    const temperature = tempCelsius ? weatherDay.forecast.forecastday.day.avgtemp_c : celciusToFahrenheit(weatherDay.forecast.forecastday.day.avgtemp_c);



    return (
        <>
            (weatherDay && (
            <div className="FutureDayContentBox">
                <div className='locationInfo'>
                    {date}
                </div>
                <div className="ImgContent">
                    <Image
                        className="weatherIcon"
                        src={weatherDay.forecast.forecastday.condition.icon}
                        aria-label={`${weatherDay.forecast.forecastday.condition.text} icon`}
                        alt="Weather icon"
                        width={150}
                        height={150}
                        priority={true}
                    />

                    <div className="weatherTemp">
                         `Temperature: ${temperature}`
                    </div>
                    )
                </div>
            </div>)
        </>
    )
};