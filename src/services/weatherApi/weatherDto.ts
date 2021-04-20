import { IWeather } from "./weatherModel";

export interface IGetWeatherByCitiesResponseDto {
  message: string
  status: true
  data: {
    weatherCities: IWeather[]
  }
}
