import React, { useEffect, useState } from "react";
import { toastError } from "../../helpers/toastHelper";
import { getWeatherByCities } from "../../services/weatherApi";
import { IWeather } from "../../services/weatherApi/weatherModel";
import Input from "../Input";
import Tag from "../Tag";

interface IProps {
  setCityNames: React.Dispatch<React.SetStateAction<string[]>>
  setCityWeathers: React.Dispatch<React.SetStateAction<IWeather[]>>;
  cityNames: string[]
}

const CityForm: React.FC<IProps> = ({ cityNames, setCityNames, setCityWeathers }) => {
  const [inputCity, setInputCity] = useState<string>("");

  const isToAddCity = (city:string): string | true => {
    if(city.trim() === '' || city.trim().length < 3 ) return 'Nome da Cidade precisa ter pelo menos 3 letras!'
    if(cityNames.length >= 10) return 'Só pode ser adicionado até 10 cidades!'
    return true
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const result = isToAddCity(inputCity)
      if(typeof  result === 'string') {
        toastError(result)
        return
      }
      setCityNames(cityNames.concat([inputCity.trim()]))
      setInputCity("")
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputCity(e.target.value);
  };

  const handleTagClick = (id:number) => {
    const list = [...cityNames]
    list.splice(id, 1)
    setCityNames(list)
  }

  useEffect(() => {
    const fetchData = async () => {
      if(cityNames.length > 2) {
        const result = await getWeatherByCities(cityNames)
        if(result) setCityWeathers(result)
      }
    }

    fetchData()
  }, [cityNames, setCityWeathers])

  return (
    <section>
      <Input 
        label="Cidades"
        handleChange= {handleChange}
        handleKeyPress= {handleKeyPress}
        placeholderText="Pressione enter para adicionar uma nova cidade"
        value={inputCity} />
      <div>{cityNames.map( (cityName, i) => <Tag name={cityName} id={i} handleClick={handleTagClick} key={i} />)}</div>
    </section>
  );
};

export default CityForm;
