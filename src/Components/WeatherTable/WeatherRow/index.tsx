import React from "react";
import { IWeather } from "../../../services/weatherApi/weatherModel";

interface IProps {
  weather: IWeather;
}

const WeatherRow: React.FC<IProps> = ({ weather }) => {
  return (
    <tr>
      <td>{weather.city}</td>
      <td>{weather.temp}</td>
      <td>{weather.tempMax}</td>
      <td>{weather.tempMin}</td>
      <td>{weather.sunrise}</td>
      <td>{weather.sunset}</td>
    </tr>
  );
};

export default WeatherRow;
