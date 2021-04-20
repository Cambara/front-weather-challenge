import styled from "styled-components";


export const TagCloseBtn = styled.a`
  display: inline-flex;
  height: 100%;
  float:right;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  &:hover{
    color: #FFF;
  }
`

export const TagWrapper = styled.span`
  display: inline-flex;
  margin: 0.31rem;
  background-color: #91A5BD;
  height: 30px;
  align-items: center;
  border: 1px solid rgba(92,105,120,0.71);
  border-radius: 2px;
  span {
    font-family: 'Raleway', sans-serif;
    margin-left: 0.3rem;
  }
`