import { ReactNode, createContext, useState } from 'react';
import { IWeatherData } from './interfaces';

export const weatherContextProvider = createContext<{
  weatherData?: IWeatherData;
  tempCelsius: boolean;
  temperatureUnits: (tempCelsius: boolean) => void;
  updateWeatherData: (data: IWeatherData) => void;
}>({
  weatherData: undefined,
  tempCelsius: true,
  updateWeatherData: () => {},
  temperatureUnits: () => {},
});

export default function WeatherContext({ children }: { children: ReactNode }) {
  const [tempCelsius, setTempCelsius] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<IWeatherData>();

  const updateWeatherData = (data: IWeatherData) => {
    setWeatherData(data);
  };

  const temperatureUnits = () => {
    setTempCelsius(!tempCelsius);
  };

  return (
    <weatherContextProvider.Provider
      value={{ weatherData, updateWeatherData, temperatureUnits, tempCelsius }}
    >
      {children}
    </weatherContextProvider.Provider>
  );
}
