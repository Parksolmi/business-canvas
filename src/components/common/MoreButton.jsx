import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MoreButton = ({ onClick, isDisabled = false }) => {
  return (
    <StyledMoreButton
      className="more-button"
      onClick={onClick}
      disabled={isDisabled}
    >
      <img src="/assets/png/more-button.png" alt="more" />
    </StyledMoreButton>
  );
};

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

const StyledMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;

  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.divider};
  }
  &:active {
    background: ${({ theme }) => theme.colors.divider};
  }

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme.colors.divider};
  }
`;

export default MoreButton;
