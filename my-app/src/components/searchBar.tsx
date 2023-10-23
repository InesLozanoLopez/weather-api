'use client'

import { useContext } from 'react';
import {fetchWeather} from './../apiServices';
import {IFormValues} from './../interfaces';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { weatherContext } from '@/context';


export default function SearchBar (){
    const { updateWeatherData } = useContext(weatherContext)

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        validationSchema: Yup.object({
            city: Yup.string().required('Insert the city you would like to get the forecast from'),
        }),
        onSubmit: async (values: IFormValues) => {
            const today = new Date();
            const data = await fetchWeather({city: values.city, today});
            updateWeatherData(data);
        }
    })
    return(
        <form>
            <input
            type="text"
            aria-label="Inser the city to get the forecast from"
            id="city"
            placeholder='City...'
            value={formik.values.city}
            onChange={formik.handleChange}
            />
        </form>
    )
}