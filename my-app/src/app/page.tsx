'use client'

import '@/globals.css';
import SearchBar from './../components/searchBar';
import {useContext} from 'react';
import WeatherContext, { weatherContext } from '@/context';
import WeatherFuture from '@/components/WeatherFuture';
import WeatherToday from '@/components/weatherToday';

export default function HomePage() {
    const weatherData = useContext(weatherContext);

    return (
        <>
          <SearchBar />
        <WeatherContext>
            {weatherData && (
                <>
            <WeatherToday/>
            <WeatherFuture/>
            </>
            )}
        </WeatherContext>
        </>
    );
};
