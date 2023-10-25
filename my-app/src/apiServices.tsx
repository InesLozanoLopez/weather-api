import axios from 'axios';
import iconImg from '../public/appIcon.png';
import { toast } from 'react-toastify';
import Image from 'next/image';

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
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      toast.error(
        <div>
          Check the spelling of the city
          <Image src={iconImg} alt="App Icon" height={20} width={20} />
        </div>,
      );
    } else {
      toast.error(`Network error: ${error.message}`);
    }
  }
};
