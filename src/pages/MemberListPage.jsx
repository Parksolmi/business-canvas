import React, { useState } from "react";
import Header from "../components/common/Header";
import MemberTable from "../components/ui/MemberTable";
import useModal from "../hooks/useModal";
import AddMemberModal from "../components/ui/AddMemberModal";
import { format } from "date-fns";

const MemberListPage = () => {
  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem("members")) || []
  );

  const { openModal: openAddMemberModal, closeModal: closeAddMemberModal } =
    useModal(() => (
      <AddMemberModal
        isOpen={true}
        onClose={closeAddMemberModal}
        onSave={handleSaveNewMember}
      />
    ));

  const handleSaveNewMember = (newMember) => {
    const existingMembers = JSON.parse(localStorage.getItem("members")) || [];

    const updatedMembers = [
      ...existingMembers,
      {
        id: existingMembers.length + 1,
        ...newMember,
        joinDate: newMember.joinDate
          ? format(new Date(newMember.joinDate), "yyyy-MM-dd")
          : null,
      },
    ];

    localStorage.setItem("members", JSON.stringify(updatedMembers));
    setMembers(updatedMembers);

    closeAddMemberModal();
  };

  return (
    <div>
      <Header onClickPlusButton={openAddMemberModal} />
      <MemberTable members={members} />
    </div>
  );
};

export default MemberListPage;
