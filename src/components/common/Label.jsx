import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = ({ text, isRequired = false, htmlFor, className }) => {
  return (
    <StyledLabel htmlFor={htmlFor} className={className}>
      {text}
      {isRequired && <span className="required"> *</span>}
    </StyledLabel>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: "",
  className: "",
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
  color: var(--colorTextTertiary, #00000073);

  .required {
    color: red;
  }
`;

export default Label;
