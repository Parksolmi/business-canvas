import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ onClickPlusButton }) => {
  return (
    <WrapperHeader>
      <h2>회원 목록</h2>
      <Button children={"추가"} onClick={() => onClickPlusButton()} />
    </WrapperHeader>
  );
};

Header.propsTypes = {
  onClickPlusButton: PropTypes.func.isRequired,
};

const WrapperHeader = styled.header`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0%;
  padding: 0.75rem 0.875rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default Header;
