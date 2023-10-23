import axios from 'axios';

export const fetchWeather = async ({ city, today }: { city: string, today: Date }) => {
  const endDay = today.setDate(today.getDate() + 4);
  const baseUrl = 'https://api.weatherstack.com/historical';
  const myAccessKey = '4ab0647e6a4809d3e8cbc6d208c56a89';

    try {
        const response = await axios.get(baseUrl,
            {
                params: {
                    access_key: myAccessKey,
                    query: city,
                    historical_date_start: today.toString().slice(0, 10),
                    historical_date_end: endDay.toString().slice(0, 10),
                }
            });
        if (response.data) {
            return response.data;
        }
    } catch (e) {
        console.log('Error from fetchWeather', e)
    }


}