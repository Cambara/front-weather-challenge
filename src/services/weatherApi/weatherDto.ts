
export interface IWeatherCityResponse {
  city: string
  sunrise: number
  sunset: number
  temp: number
  tempMax: number
  tempMin: number
}

export interface IGetWeatherByCitiesResponseDto {
  message: string
  status: true
  data: {
    weatherCities: IWeatherCityResponse[]
  }
}
