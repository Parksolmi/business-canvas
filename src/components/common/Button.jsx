import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return (
    <WrapperButton onClick={onClick}>
      <img src="assets/png/plus-outlined.png" alt="plus" />
      {children}
    </WrapperButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const WrapperButton = styled.button`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0%;
  padding: 0.3rem 0.75rem;
  background-color: #4a7cfe;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: #739fff;
  }
  &:active {
    background-color: #345dd9;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export default Button;
