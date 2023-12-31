const contextValue = {
  weatherData: {
    location: {
      name: 'Test City',
      country: 'Test Country',
    },
    forecast: {
      forecastday: [
        {
          date: '2023-10-24',
          day: {
            avgtemp_c: 20,
            condition: {
              icon: 'test-icon-url',
              text: 'Sunny',
            },
            daily_chance_of_rain: 10,
            avgvis_miles: 5,
            avghumidity: 60,
          },
        },
      ],
    },
  },
};

const mockWeatherDay = {
  date: '2023-10-25',
  day: {
    avgtemp_c: 20,
    condition: {
      icon: 'http://cdn.weatherapi.com/weather/64x64/night/113.png',
      text: 'Sunny',
    },
  },
};

const mockContextProvider = {
  weatherData: contextValue.weatherData,
  tempCelsius: true,
  temperatureUnits: jest.fn(),
  updateWeatherData: jest.fn(),
};

export { mockContextProvider, mockWeatherDay, contextValue };
