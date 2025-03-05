import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Textarea = ({ id, value, onChange, placeholder }) => {
  return (
    <StyledTextarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const StyledTextarea = styled.textarea`
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

export default Textarea;
