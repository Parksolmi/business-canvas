import React from "react";
import styled from "styled-components";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const StyledTextarea = styled.textarea`
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

export default Textarea;
