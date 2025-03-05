import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Checkbox = ({ checked, onChange }) => {
  return (
    <WrapperCheckbox>
      <input
        className="hidden-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <StyledCheckbox $checked={checked} />
    </WrapperCheckbox>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

const WrapperCheckbox = styled.label`
  .hidden-checkbox {
    display: none;
  }
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  background-color: white;
  transition: all 0.15s ease-in-out;

  ${({ $checked }) =>
    $checked &&
    `
      background: url(/assets/png/check-icon.png) #4A7CFE no-repeat center;
      background-size: 10px auto;
      border-color: transparent;
    `}
`;

export default Checkbox;
