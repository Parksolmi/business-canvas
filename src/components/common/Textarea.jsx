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

  &:hover {
    border: 1px solid var(--Input-colorPrimary, #4a7cfe);
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px #4a7cfe26;
    border: 1px solid var(--Input-colorPrimary, #4a7cfe);
  }
`;

export default Textarea;
