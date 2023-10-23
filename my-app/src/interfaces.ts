
export interface IFormValues {
    city: string;
}

export interface IWeatherData {
    location: {
        name: string,
        country: string,
    },
    current: {
        observation_time: string,
        temperature: number,
        weather_icons: [
            string
        ],
        weather_descriptions: [
            string
        ],
        wind_speed: number,
        humidity: number,
        feelslike: number,
    },
}