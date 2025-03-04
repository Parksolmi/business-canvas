import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <SaveButton disabled>저장</SaveButton>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  width: 500px;
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e3e3;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 20px 0;
  flex-grow: 1;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
`;

const CancelButton = styled.button`
  background: none;
  border: 1px solid #e3e3e3;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  background: #e3e3e3;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: not-allowed;
  color: #999;
`;
