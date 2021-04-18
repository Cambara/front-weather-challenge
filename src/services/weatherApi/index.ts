import axios from 'axios';
import { toastError } from '../../helpers/toastHelper';
import { convertResponseToWeather } from './helper';
import { IGetWeatherByCitiesResponseDto } from './weatherDto';
import { IWeather } from './weatherModel';

const url = 'http://localhost:8000/get-weather'

export const getWeatherByCities = async (cityNames:string[]):Promise<IWeather[] | undefined> => {
  try {
    const result = await axios.get<IGetWeatherByCitiesResponseDto>(url, {
      params: {
        cities: cityNames
      }
    })
    return result.data.data.weatherCities.map( weatherCity => convertResponseToWeather(weatherCity))
    
  } catch (error) {
    const msg = error.response?.data?.message ? error.response.data.message : 'Erro no sistema. Por favor tente novamente ou entre em contato com o nosso suporte'
    toastError(msg)
  }
}