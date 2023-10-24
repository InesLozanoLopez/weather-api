'use client';

import './globals.css';
import SearchBar from './../components/searchBar';
import WeatherContext from '@/context';
import WeatherFuture from '@/components/weatherFuture';
import WeatherToday from '@/components/weatherToday';
import ToastProvider from '@/toastProvider';



export default function HomePage() {
  return (
    <>

      <WeatherContext>
        <header>
          <ToastProvider>
            <SearchBar />
          </ToastProvider>
        </header>
        <main>
          <section>
            <WeatherToday />
          </section>
          <section>
            <WeatherFuture />
          </section>
        </main>
      </WeatherContext>
    </>
  );
}
