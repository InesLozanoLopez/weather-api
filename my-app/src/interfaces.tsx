
export interface IFormValues {
    city: string;
}

export interface IWeatherData {
    location: {
        name: string,
        country: string,
    },
    forecast: {
        forecastday: {
            date: string,
            day: {
                avghumidity: number,
                avgtemp_c: number,
                avgvis_miles: number,
                daily_chance_of_rain: number
            },
            condition: {
                text: string,
                icon: string,
            }
        },
    }
}