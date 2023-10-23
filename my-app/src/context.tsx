import { ReactNode, createContext, useState } from "react";
import { IWeatherData } from "./interfaces";

export const weatherContext = createContext<{weatherData: IWeatherData[] | null, updateWeatherData :(data: IWeatherData[]) => void}>({
    weatherData: null,
    updateWeatherData: () => {}
});

export function WeatherProvider({ children }: {children : ReactNode}){
    const [weatherData, setWeatherData] = useState<IWeatherData[] | null>(null);

    const updateWeatherData = (data: IWeatherData[]) => {
        setWeatherData(data)
    };

    return (
        <weatherContext.Provider value={{weatherData, updateWeatherData}}>
            {children}
        </weatherContext.Provider>
    )
}

