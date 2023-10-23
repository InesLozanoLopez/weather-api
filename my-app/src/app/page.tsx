'use client'

import '@/globals.css';
import SearchBar from './../components/searchBar';
import {useContext, useEffect} from 'react';
import WeatherContext, { weatherContext } from '@/context';
import WeatherFuture from '@/components/weatherFuture';
import WeatherToday from '@/components/weatherToday';

export default function HomePage() {
    const weatherData = useContext(weatherContext);
    console.log(weatherData)

    return (
        <>
          <SearchBar />
        <WeatherContext>
            {weatherData.weatherData.length > 0 && (
                <>
            <WeatherToday/>
            <WeatherFuture/>
            </>
            )}
        </WeatherContext>
        </>
    );
};
