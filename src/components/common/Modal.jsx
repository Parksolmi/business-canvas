import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, title, bodyCildren, footerChildren }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <WrapperModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            <img src="/assets/png/close-button.png" alt="close" />
          </button>
        </ModalHeader>
        <ModalBody>{bodyCildren}</ModalBody>
        <ModalFooter>{footerChildren}</ModalFooter>
      </WrapperModal>
    </Overlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
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

const WrapperModal = styled.div`
  background: white;
  width: 500px;
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--colorSplit, #0000000f);
  padding: 10px;

  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 18px 24px;
  flex-grow: 1;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
  background: var(--colorFillAlter, #00000005);
  border-top: 1px solid var(--colorSplit, #0000000f);
`;
