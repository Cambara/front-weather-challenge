import React from "react";
import { convertUnixDateToFormatDate } from "../../../helpers/dateHelper";
import { IWeather } from "../../../services/weatherApi/weatherModel";

interface IProps {
  weather: IWeather;
}

const WeatherRow: React.FC<IProps> = ({ weather }) => {
  return (
    <tr>
      <td>{weather.city}</td>
      <td>{weather.temp} &#8451;</td>
      <td>{weather.tempMax} &#8451;</td>
      <td>{weather.tempMin} &#8451;</td>
      <td>{convertUnixDateToFormatDate(weather.sunrise)}</td>
      <td>{convertUnixDateToFormatDate(weather.sunset)}</td>
    </tr>
  );
};

export default WeatherRow;
