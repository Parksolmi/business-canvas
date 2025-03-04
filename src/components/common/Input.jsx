import React from "react";
import styled from "styled-components";

const Input = ({ type = "text", placeholder = "", value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};

const StyledInput = styled.input`
  padding: 5px 12px;
  border-radius: 10px;
  border: 1px solid var(--Input-colorBorder, #e3e3e3);

  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;

  &::placeholder {
    color: #999;
  }
`;

export default Input;
