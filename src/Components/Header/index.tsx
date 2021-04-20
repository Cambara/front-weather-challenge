import React from "react";
import { FirstRow, HeaderContent, SecondtRow, Title, Container } from "./style";

const Header: React.FC = () => {
  return (
    <HeaderContent>
      <FirstRow>
        <Container>
          <Title>Clima APP</Title>
        </Container>
      </FirstRow>
      <SecondtRow />
    </HeaderContent>
  );
};

export default Header;
