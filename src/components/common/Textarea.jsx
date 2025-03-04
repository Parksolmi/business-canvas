import React from "react";
import styled from "styled-components";

const Textarea = ({
  label,
  isRequired = false,
  value,
  onChange,
  placeholder,
  // rows,
  // cols,
}) => {
  return (
    <WrapperTextarea>
      <label>
        {label}
        {isRequired && <span className="required"> *</span>}
      </label>
      <StyledTextarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        // rows={rows}
        // cols={cols}
      />
    </WrapperTextarea>
  );
};

const WrapperTextarea = styled.div`
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
