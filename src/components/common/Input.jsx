import React from "react";
import styled from "styled-components";

const Input = ({ type = "text", id, placeholder = "", value, onChange }) => {
  return (
    <StyledInput
      id={id}
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
  border: 1px solid ${({ theme }) => theme.colors.border};

  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;

  &::placeholder {
    color: #999;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px #4a7cfe26;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;
