import React, { useState } from "react";
import { Container, WrapperSearchBox } from "./style";
import CityForm from "../../Components/CityForm";

const Home: React.FC = () => {
  const [cityNames, setCityNames] = useState<string[]>([]);
  return (
    <Container>
      <WrapperSearchBox>
        <CityForm setCityNames={setCityNames} cityNames={cityNames} />
      </WrapperSearchBox>
    </Container>
  );
};

export default Home;
