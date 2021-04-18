
import styled from "styled-components";
export * from './../../styles/sharedStyles'

export const WrapperSearchBox = styled.div`
  width: 100%;
  position: absolute;
  top: -70px;
  background-color: #fbfbfb;
  min-height: 150px;
  padding: 20px;
  z-index: 10;
  box-shadow: 0px 0px 15px -4px rgb(0 0 0 / 75%);
  border-radius: 5px;
  left:0;
  @media(min-width: 768px) {
    width: 70%;
    transform: translateX(15%);
    left:unset;
  }
  @media(min-width: 1023px) {
    width: 50%;
    transform: translateX(50%);
  }
`