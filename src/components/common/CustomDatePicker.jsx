// import React, { useState } from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import styled from "styled-components";
// import { FaCalendarAlt } from "react-icons/fa"; // 캘린더 아이콘 추가

// const CustomDatePicker = ({ selectedDate, onChange }) => {
//   const [startDate, setStartDate] = useState(selectedDate);

//   const handleChange = (date) => {
//     setStartDate(date);
//     onChange(date);
//   };

//   return (
//     <DatePickerWrapper>
//       <StyledDatePicker
//         selected={startDate}
//         onChange={handleChange}
//         dateFormat="yyyy/MM/dd"
//         placeholderText="Select date"
//         popperPlacement="bottom-start"
//         calendarClassName="custom-calendar"
//       />
//       <CalendarIcon />
//     </DatePickerWrapper>
//   );
// };

// export default CustomDatePicker;

// // ✅ Styled Components
// const DatePickerWrapper = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 240px;
// `;

// const StyledDatePicker = styled(ReactDatePicker)`
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #e3e3e3;
//   border-radius: 6px;
//   font-size: 14px;
//   outline: none;
//   background-color: white;
//   cursor: pointer;
//   font-family: Pretendard, sans-serif;

//   &:focus {
//     border-color: #4a7cfe;
//     box-shadow: 0 0 0 2px rgba(74, 124, 254, 0.2);
//   }
// `;

// const CalendarIcon = styled(FaCalendarAlt)`
//   position: absolute;
//   right: 12px;
//   color: #aaa;
//   pointer-events: none;
//   font-size: 16px;
// `;

// // ✅ `react-datepicker`의 기본 CSS를 추가로 커스텀하기 위한 스타일
// import { createGlobalStyle } from "styled-components";

// export const DatePickerStyles = createGlobalStyle`
//   /* 캘린더 컨테이너 */
//   .react-datepicker {
//     border-radius: 12px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//     font-family: Pretendard, sans-serif;
//     border: 1px solid #e3e3e3;
//   }

//   /* 캘린더 헤더 */
//   .react-datepicker__header {
//     background: white;
//     border-bottom: none;
//     padding: 10px 0;
//   }

//   .react-datepicker__current-month {
//     font-size: 16px;
//     font-weight: bold;
//   }

//   .react-datepicker__navigation {
//     top: 10px;
//   }

//   /* 날짜 스타일 */
//   .react-datepicker__day {
//     border-radius: 6px;
//     width: 32px;
//     height: 32px;
//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 14px;
//     color: #333;
//     transition: background 0.2s;
//   }

//   .react-datepicker__day:hover {
//     background: #e3e3e3;
//   }

//   .react-datepicker__day--selected {
//     background: #4a7cfe;
//     color: white;
//     font-weight: bold;
//   }

//   .react-datepicker__day--today {
//     border: 1px solid #4a7cfe;
//   }
// `;
