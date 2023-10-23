'use client'

import '@/globals.css';
import SearchBar from './../components/searchBar';
import WeatherContext from '@/context';
import WeatherFuture from '@/components/weatherFuture';
import WeatherToday from '@/components/weatherToday';

export default function HomePage() {

    return (
        <>
            <WeatherContext>
                <SearchBar />
                <WeatherToday />
                <WeatherFuture />
            </WeatherContext>
        </>
    );
};
