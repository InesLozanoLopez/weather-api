import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchWeather } from '../../src/apiServices';
import { toast } from 'react-toastify';
import { act, waitFor } from '@testing-library/react';
import iconImg from '../public/appIcon.png';


jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));


describe('fetchWeather function', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should make a successful API request with the provided city', async () => {
    mock.onGet('http://api.weatherapi.com/v1/forecast.json').reply(200, {
      weatherData: {
        location: {
          name: 'Stirling',
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
    })

    const city = 'Stirling';
    const weatherData = await fetchWeather(city);

    expect(mock.history.get[0].params).toEqual({
      key: 'b8159c97c59d43d08eb203618232310',
      q: city,
      days: 5,
    });

    expect(weatherData.weatherData.location.name).toEqual('Stirling');
  });

  it('should handle API errors', async () => {
    mock.onGet('http://api.weatherapi.com/v1/forecast.json').reply(403);

    const city = 'InvalidCity';
    try {
      await fetchWeather(city);
    } catch (error: any) {
      await waitFor(() => {
        act(() => {
          if (error.status === 400) {
            expect(toast.error(
              `Check the spelling of the city ${iconImg}`));
          } else {
            expect(toast.error(`Network error: ${error.message}`));
          }
        });
      })
    }
  })
})
