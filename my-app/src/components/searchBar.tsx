'use client';

import './styles/searchBarStyle.css';
import { useContext } from 'react';
import { fetchWeather } from './../apiServices';
import { IFormValues } from './../interfaces';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { weatherContextProvider } from './../context';
import { toast } from 'react-toastify';

export default function SearchBar() {
  const { updateWeatherData } = useContext(weatherContextProvider);
  const pattern = /^[A-Za-z]+$/;

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: Yup.object({
      city: Yup.string().required(
        'Please the city you would like to get the forecast from',
      ),
    }),
    onSubmit: async (values: IFormValues) => {
      if (!pattern.test(values.city)) {
        toast.warning('Only letters allowed');
      } else {
        const loadingToastMessage = toast.info('Loading forecast...');
        const data = await fetchWeather(values.city);
        updateWeatherData(data);
        toast.dismiss(loadingToastMessage);
      }
    },
  });

  return (
    <div className="searchBarContainer">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="searchBar"
          type="text"
          aria-label="Insert the city to get the forecast from"
          id="city"
          placeholder="City..."
          value={formik.values.city}
          onChange={formik.handleChange}
        />
      </form>
    </div>
  );
}
