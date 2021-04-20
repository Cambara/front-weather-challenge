import { IWeather } from "../../../services/weatherApi/weatherModel";
import { IWeatherChartModel } from "./weatherChartModel";

export const convertWeatherToBarObject = ({city, tempMax, tempMin}:IWeather):IWeatherChartModel => {
  return {
    city,
    "Temperatura Máxima": tempMax,
    "Temperatura Mínima": tempMin
  }
}

export const createWeatherChartList = (data:IWeather[]):IWeatherChartModel[] => data.map(obj => convertWeatherToBarObject(obj))