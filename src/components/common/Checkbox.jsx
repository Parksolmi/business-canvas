import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Checkbox = ({ id, checked, onChange, readOnly = false, label }) => {
  return (
    <WrapperCheckbox>
      <input
        id={id}
        className="hidden-checkbox"
        type="checkbox"
        {...(readOnly ? { defaultChecked: checked } : { checked, onChange })}
      />
      <StyledCheckbox $checked={checked} />
      {label && <span>{label}</span>}
    </WrapperCheckbox>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
};

const WrapperCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;

  padding-top: 2px;
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
