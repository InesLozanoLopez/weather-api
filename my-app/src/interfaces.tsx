
export interface IFormValues {
    city: string;
}

export interface IWeatherData {
    location: {
        name: string,
        country: string,
        localtime: string,
    },
    current: {
        precip: number,
        temperature: number,
        weather_icons: [
            string
        ],
        weather_descriptions: [
            string
        ],
        wind_speed: number,
        humidity: number,
    },
}