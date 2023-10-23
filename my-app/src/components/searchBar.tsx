'use client'

import {fetchWeather} from './../apiServices';
import {IFormValues} from './../interfaces';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function SearchBar (){

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        validationSchema: Yup.object({
            city: Yup.string().required('Insert the city you would like to get the forecast from'),
        }),
        onSubmit: (values: IFormValues) => {
            const today = new Date();

            fetchWeather({city: values.city, today})
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