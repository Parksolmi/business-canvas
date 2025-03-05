import React from "react";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import styled from "styled-components";

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const handleChange = (date) => {
    onChange(date ? date.format("YYYY-MM-DD") : null);
  };

  return (
    <DatePickerWrapper>
      <StyledDatePicker
        value={selectedDate ? dayjs(selectedDate, "YYYY-MM-DD") : null}
        onChange={handleChange}
        format="YYYY-MM-DD"
        placeholder="Select date"
        popupClassName="custom-calendar"
        showToday={false}
      />
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;

const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 70%;
  border: 1px solid #d1d5db !important;
  border-radius: 8px !important;
  font-size: 14px;
  font-family: Pretendard, sans-serif;
  transition: box-shadow 0.2s ease-in-out;

  &:focus,
  &:hover {
    border-color: #4a90e2 !important;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2) !important;
  }
`;
