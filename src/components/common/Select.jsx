import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import PropTypes from "prop-types";

const options = ["개발자", "PO", "디자이너"];

const Select = ({ id, selected, onChange, isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState(selected || options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      <SelectBox id={id} onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        {selectedOption}
        <img
          src="/assets/png/select-icon.png"
          alt="dropdown"
          className="icon"
        />
      </SelectBox>
      {isOpen && (
        <Dropdown>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelect(option)}
              $isSelected={option === selectedOption}
            >
              {option}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SelectWrapper>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

const SelectWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const SelectBox = styled.div`
  width: 50%;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .icon {
    width: 1rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.primaryHover};
    background-color: ${({ theme }) => theme.colors.primaryExtraLight};

    .icon {
      content: url("/assets/png/select-icon-hover.png");
    }
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  margin-top: 5px;
  overflow: hidden;
  z-index: 100;
  padding: 4px;

  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
`;

const DropdownItem = styled.li`
  padding: 10px 12px;
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.textDark};
    background: ${({ theme }) => theme.colors.backgroundGray};
  }

  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      background: ${theme.colors.primaryLight};
      color: ${theme.colors.primary};
    `}
`;

export default Select;
