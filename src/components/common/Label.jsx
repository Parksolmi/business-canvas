import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = ({ id, text, isRequired = false }) => {
  return (
    <StyledLabel htmlFor={id}>
      {text}
      {isRequired && <span className="required"> *</span>}
    </StyledLabel>
  );
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  htmlFor: PropTypes.string,
};

const StyledLabel = styled.label`
  display: flex;
  gap: 4px;

  font-family: Pretendard;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  color: ${({ theme }) => theme.colors.textGray};

  .required {
    color: red;
  }
`;

export default Label;
