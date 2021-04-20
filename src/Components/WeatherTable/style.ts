import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
`

export const THead = styled.thead`
  background-color: #466F87;
  tr {
    height: 60px;
    color: #FFF;
    cursor: pointer; 
  }
  tr > th {
    padding: 3px;
  }
`

export const TBody = styled.tbody`
  text-align: center;
  tr {
    height: 40px;
  }
  tr > td {
    border-bottom: 1px solid #466F87;
  }
`