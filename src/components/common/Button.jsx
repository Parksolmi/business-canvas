import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({
  onClick,
  disabled = false,
  children,
  variant = "primary",
}) => {
  return (
    <WrapperButton onClick={onClick} disabled={disabled} $variant={variant}>
      {children}
    </WrapperButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "cancel"]), // 버튼 타입 지정
};

const WrapperButton = styled.button`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0%;
  padding: 0.3rem 0.75rem;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  /* ✅ Primary (저장 버튼) */
  background-color: ${({ disabled, $variant }) =>
    disabled ? "#e3e3e3" : $variant === "primary" ? "#4a7cfe" : "none"};
  color: ${({ disabled, $variant }) =>
    disabled ? "#999" : $variant === "primary" ? "#fff" : "#333"};
  border: ${({ $variant }) =>
    $variant === "cancel" ? "1px solid #e3e3e3" : "none"};

  &:hover {
    background-color: ${({ disabled, $variant }) =>
      disabled ? "#e3e3e3" : $variant === "primary" ? "#739fff" : "#f5f5f5"};
  }

  &:active {
    background-color: ${({ disabled, $variant }) =>
      disabled ? "#e3e3e3" : $variant === "primary" ? "#345dd9" : "#e0e0e0"};
  }
`;

export default Button;
