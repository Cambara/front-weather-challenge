import React, { useEffect, useState } from "react";
import { BlankRow, Container, WrapperSearchBox } from "./style";
import CityForm from "../../Components/CityForm";
import { IWeather } from "../../services/weatherApi/weatherModel";
import { IWeatherChartModel } from "../../Components/Chart/WeatherBar/weatherChartModel";
import WeatherBar from "../../Components/Chart/WeatherBar";
import { createWeatherChartList } from "../../Components/Chart/WeatherBar/helper";
import WeatherTable from "../../Components/WeatherTable";

const Home: React.FC = () => {
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [cityWeathers, setCityWeathers] = useState<IWeather[]>([]);
  const [weatherChartList, setWeatherChartList] = useState<IWeatherChartModel[]>([]);
  const [isToDisplay, setIsToDisplay] = useState(false);
  
  useEffect(() => {
    if(cityWeathers.length > 0) { 
      setWeatherChartList(createWeatherChartList(cityWeathers))
      setIsToDisplay(true)
    }else {
      setIsToDisplay(false)
    }

  }, [cityWeathers])
  return (
    <Container>
      <WrapperSearchBox>
        <CityForm setCityNames={setCityNames} cityNames={cityNames} setCityWeathers={setCityWeathers} />
      </WrapperSearchBox>
      <BlankRow/>
      { isToDisplay ?
        <section>
          <WeatherBar data={weatherChartList} />
          <WeatherTable cityWeathers={cityWeathers} />
        </section>
        : ''  }
    </Container>
  );
};

export default Home;
