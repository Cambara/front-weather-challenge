import { convertUnixDateToFormatDate } from "../../helpers/dateHelper";
import { IWeatherCityResponse } from "./weatherDto";
import { IWeather } from "./weatherModel";

export const convertResponseToWeather = ({
  city,
  sunrise,
  sunset,
  temp,
  tempMax,
  tempMin
}:IWeatherCityResponse):IWeather => {
  return {
    city,
    temp,
    tempMin,
    tempMax,
    sunrise: convertUnixDateToFormatDate(sunrise),
    sunset: convertUnixDateToFormatDate(sunset)
  }
}
