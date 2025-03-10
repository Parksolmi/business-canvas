import { useResetRecoilState, useSetRecoilState } from "recoil";
import { modalState } from "../store/modalState";

/**
 * 모달을 전역 상태로 관리하여 root 요소 바로 하위에 렌더링 할 수 있게 도와주는 커스텀 훅입니다.
 * index.js 파일 안의 GlobalModalContainer를 통해 렌더링합니다.
 * @param {function} modal - 모달 JSX를 반환하는 함수
 * @returns {object} openModal 함수와 closeModal 함수를 포함하는 객체
 */

const useModal = (modal) => {
  const setActiveModal = useSetRecoilState(modalState);
  const resetState = useResetRecoilState(modalState);

  const openModal = (data) => {
    setActiveModal(<>{modal(data)}</>);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    resetState();
    document.body.style.overflow = "auto";
  };

  return { openModal, closeModal };
};

export default useModal;
