import { ReactNode, createContext, useState } from "react";
import { IWeatherData } from "./interfaces";

export const weatherContext = createContext<{weatherData: IWeatherData[], updateWeatherData :(data: IWeatherData[]) => void}>({
    weatherData: [],
    updateWeatherData: () => {}
});

export default function WeatherContext({ children }: {children : ReactNode}){
    const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);

    const updateWeatherData = (data: IWeatherData[]) => {
        setWeatherData(data)
    };

    return (
        <weatherContext.Provider value={{weatherData, updateWeatherData}}>
            {children}
        </weatherContext.Provider>
    )
}

