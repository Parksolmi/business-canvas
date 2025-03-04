import React from "react";
import styled from "styled-components";

const Input = ({
  label,
  isRequired = false,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <WrapperInput>
      <label>
        {label}
        {isRequired && <span className="required"> *</span>}
      </label>

      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </WrapperInput>
  );
};

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  color: var(--colorTextTertiary, #00000073);

  .required {
    color: red;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 0;
  border-radius: 10px;
  border: 1px solid var(--Input-colorBorder, #e3e3e3);

  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;

  &::placeholder {
    padding-left: 12px;
  }
`;

export default Input;
