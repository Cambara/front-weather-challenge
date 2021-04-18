import React from "react";
import { TagCloseBtn, TagWrapper } from "./style";


interface IProps {
  name:string,
  id:number
  handleClick(id:number):void
}

const Tag: React.FC<IProps> = ({ name, handleClick, id }) => {
  return (
    <TagWrapper>
      <span>{name}</span>
      <TagCloseBtn onClick={() => handleClick(id)} >x</TagCloseBtn>
    </TagWrapper>
  );
};

export default Tag;
