'use client';

import '@/globals.css';
import SearchBar from './../components/searchBar';
import WeatherContext from '@/context';
import WeatherFuture from '@/components/weatherFuture';
import WeatherToday from '@/components/weatherToday';
import ToastProvider from '@/toastContainer';



export default function HomePage() {
  return (
    <>
      <WeatherContext>
        <ToastProvider>
          <SearchBar />
        </ToastProvider>
        <WeatherToday />
        <WeatherFuture />
      </WeatherContext>
    </>
  );
}
