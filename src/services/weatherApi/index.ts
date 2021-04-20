import axios from 'axios';
import { toastError } from '../../helpers/toastHelper';
import { IGetWeatherByCitiesResponseDto } from './weatherDto';
import { IWeather } from './weatherModel';

const url = 'http://localhost:8000/get-weather'

export const getWeatherByCities = async (cityNames:string[]):Promise<IWeather[] | undefined> => {
  const cities = cityNames.map( cityName => cityName.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  try {
    const result = await axios.get<IGetWeatherByCitiesResponseDto>(url, {
      params: {
        cities
      }
    })
    return result.data.data.weatherCities
    
  } catch (error) {
    const msg = error.response?.data?.message ? error.response.data.message : 'Erro no sistema. Por favor tente novamente ou entre em contato com o nosso suporte'
    toastError(msg)
  }
}