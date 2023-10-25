import './styles/futureDayStyle.css';
import { IWeatherDay } from './../interfaces';
import { formatDayOfWeek } from './../functions/dateFormatFunctions.tsx';
import { temperatureToggle } from './../functions/temperatureFunctions';

import Image from 'next/image';
import { weatherContextProvider } from './../context';
import { useContext } from 'react';

export default function FutureDay({ weatherDay }: { weatherDay: IWeatherDay }) {
  const date = formatDayOfWeek(weatherDay.date);

  const tempCelsius = useContext(weatherContextProvider).tempCelsius;

  const temperature = temperatureToggle({
    tempCelsius: tempCelsius,
    temperature: weatherDay.day.avgtemp_c,
  });

  return (
    <>
      <div className="futureDayContainer" tabIndex={0}>
        <div className="locationInfo">{date}</div>
        <div className="ImgContent">
          <Image
            className="futureWeatherIcon"
            src={`http:${weatherDay.day.condition.icon}`}
            aria-label={`${weatherDay.day.condition.text} icon`}
            alt="Weather icon"
            width={80}
            height={80}
            priority={true}
          />
        </div>
        <div className="futureDayTemp">
          {temperature} {tempCelsius ? 'ºC' : 'ºF'}
        </div>
      </div>
    </>
  );
}
