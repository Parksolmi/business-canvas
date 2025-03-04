import React from "react";
import Header from "../components/common/Header";
import MemberTable from "../components/ui/MemberTable";
import Modal from "../components/common/Modal";
import useModal from "../hooks/useModal";

const MemberListPage = () => {
  const { openModal: openAddMemberModal, closeModal: closeAddMemberModal } =
    useModal(() => (
      <Modal isOpen={true} onClose={closeAddMemberModal} title="회원 추가" />
    ));

  return (
    <div>
      <Header onClickPlusButton={openAddMemberModal} />
      <MemberTable />
    </div>
  );
};

export default MemberListPage;
