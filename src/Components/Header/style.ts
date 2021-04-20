import styled from "styled-components";
export * from './../../styles/sharedStyles'

export const HeaderContent = styled.header`
  position: relative;
  display: block;
  clear:both;
`

export const FirstRow = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  clear:both;
`

export const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  color: #466F87;

`

export const SecondtRow = styled(FirstRow)`
  background-color: #466F87;
  height: 150px;
`