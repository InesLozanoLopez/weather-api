import axios from 'axios';

export const fetchWeather = async (city: string) => {
  const baseUrl = 'http://api.weatherapi.com/v1';
  const myAccessKey = 'b8159c97c59d43d08eb203618232310';

  try {
    const response = await axios.get(baseUrl + '/forecast.json', {
      params: {
        key: myAccessKey,
        q: city,
        days: 5,
      },
    });
    if (response.data) {
      return response.data;
    }
  } catch (e) {
    console.log('Error from fetchWeather', e);
  }
};
