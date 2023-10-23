import { IWeatherData } from '@/interfaces'
import { formatDate } from "@/functions";
import Image from "next/image";

export default function FutureDay({weatherDay}: {weatherDay: IWeatherData}) {
    const date = formatDate(weatherDay.location.localtime)

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
                        src={weatherDay.current.weather_icons[0]}
                        aria-label={`${weatherDay.current.weather_descriptions} icon`}
                        alt="Weather icon"
                        width={150}
                        height={150}
                        priority={true}
                    />

                    <div className="weatherTemp">
                        {weatherDay.current.temperature}
                    </div>
                    )
                </div>
            </div>)
        </>
    )
};
