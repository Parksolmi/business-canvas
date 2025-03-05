import React from "react";
import styled from "styled-components";

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
    background: var(--Button-colorBgTextHover, #0000000f);
  }
  &:active {
    background: var(--Button-colorBgTextHover, #0000000f);
  }

  &:disabled {
    cursor: default;
    background: var(--Button-colorBgTextHover, #0000000f);
  }
`;

export default MoreButton;
