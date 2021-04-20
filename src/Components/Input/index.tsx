import React from "react";
import { InputContent, InputWrapper, Label } from "./style";

interface IProps {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void
  handleKeyPress(e: React.KeyboardEvent): void
  label: string
  value: string
  placeholderText?: string
}

const Input: React.FC<IProps> = ({ handleChange, label, value, placeholderText, handleKeyPress }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputContent type="text" value={value} onChange={e => handleChange(e)} placeholder={placeholderText || ''} onKeyPress={(e) => handleKeyPress(e)} />
    </InputWrapper>
  );
};

export default Input;
