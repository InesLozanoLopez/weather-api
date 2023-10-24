import { IWeatherDay } from '@/interfaces'
import { formatDate } from "@/functions/dateFormatFunctions.tsx";
import { temperatureToggle } from "@/functions/temperatureFunctions";

import Image from "next/image";
import { weatherContext } from '@/context';
import {useContext} from 'react';

export default function FutureDay({weatherDay}: {weatherDay: IWeatherDay}) {
    const date = formatDate(weatherDay.date);
    
    const tempCelsius  = useContext(weatherContext).tempCelsius;


    const temperature = temperatureToggle({tempCelsius : tempCelsius, temperature: weatherDay.day.avgtemp_c})



    return (
        <>
            <div className="FutureDayContentBox">
                <div className='locationInfo'>
                    {date}
                </div>
                <div className="ImgContent">
                    <Image
                        className="weatherIcon"
                        src={weatherDay.day.condition.icon}
                        aria-label={`${weatherDay.day.condition.text} icon`}
                        alt="Weather icon"
                        width={150}
                        height={150}
                        priority={true}
                    />

                    <div className="weatherTemp">
                         `Temperature: ${temperature} $ {tempCelsius ? "F" : "C"}`
                    </div>
                </div>
            </div>
        </>
    )
};