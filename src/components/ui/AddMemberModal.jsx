import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Modal from "../common/Modal";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import CustomDatePicker from "../common/CustomDatePicker";
import Label from "../common/Label";
import Select from "../common/Select";
import Checkbox from "../common/Checkbox";

const AddMemberModal = ({ isOpen, onClose, onSave }) => {
  const [newMember, setNewMember] = useState({
    name: "",
    address: "",
    memo: "",
    job: "개발자",
    emailAgreement: false,
    joinDate: null,
  });
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const datepickerRef = useRef(null);
  const selectRef = useRef(null);

  const handleChange = (field, value) => {
    setNewMember((prev) => ({ ...prev, [field]: value }));
  };

  // 버튼 활성화 유효성 검사
  const isFormValid =
    newMember.name.trim() !== "" && newMember.joinDate !== null;

  // 바깥 클릭 감지 핸들러
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datepickerRef.current &&
        !datepickerRef.current.contains(event.target)
      ) {
        datepickerRef.current?.close?.(); // DatePicker 닫기
      }
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        selectRef.current?.close?.();
        setIsSelectOpen(false); //select 닫기
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="회원 추가"
      bodyCildren={
        <>
          <WrapField>
            <Label text="이름" isRequired={true} id="name" />
            <Input
              placeholder="Input"
              id="name"
              value={newMember.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </WrapField>
          <WrapField>
            <Label text="주소" id="address" />
            <Input
              placeholder="Input"
              id="address"
              value={newMember.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </WrapField>
          <WrapField>
            <Label text="메모" />
            <Textarea
              placeholder="Textarea"
              value={newMember.memo}
              onChange={(e) => handleChange("memo", e.target.value)}
            />
          </WrapField>
          <WrapField ref={datepickerRef}>
            <Label text="가입일" isRequired={true} />
            <CustomDatePicker
              selectedDate={newMember.joinDate}
              onChange={(date) => handleChange("joinDate", date)}
            />
          </WrapField>
          <WrapField ref={selectRef}>
            <Label text="직업" />
            <Select
              options={["개발자", "PO", "디자이너"]}
              selected={newMember.job}
              onChange={(job) => handleChange("job", job)}
              isOpen={isSelectOpen}
              setIsOpen={setIsSelectOpen}
            />
          </WrapField>
          <WrapField>
            <Label text="이메일 수신 동의" />
            <Checkbox
              checked={newMember.emailAgreement}
              onChange={() =>
                handleChange("emailAgreement", !newMember.emailAgreement)
              }
            />
          </WrapField>
        </>
      }
      footerChildren={
        <>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <SaveButton onClick={() => onSave(newMember)} disabled={!isFormValid}>
            저장
          </SaveButton>
        </>
      }
    />
  );
};

// ✅ Styled Components
const WrapField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CancelButton = styled.button`
  background: none;
  border: 1px solid #e3e3e3;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#e3e3e3" : "#4A7CFE")};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  color: ${({ disabled }) => (disabled ? "#999" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default AddMemberModal;
