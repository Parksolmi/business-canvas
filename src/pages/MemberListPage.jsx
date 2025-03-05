import React, { useState } from "react";
import Header from "../components/common/Header";
import MemberTable from "../components/ui/MemberTable";
import useModal from "../hooks/useModal";
import MemberModal from "../components/ui/MemberModal";
import { format } from "date-fns";

const MemberListPage = () => {
  const [members, setMembers] = useState(
    JSON.parse(localStorage.getItem("members")) || []
  );

  const { openModal: openMemberModal, closeModal: closeMemberModal } = useModal(
    (id) => (
      <MemberModal
        isOpen={true}
        onClose={closeMemberModal}
        onSave={handleSaveMember}
        selectedId={id ? id : null}
      />
    )
  );

  const handleSaveMember = (member) => {
    let existingMembers = JSON.parse(localStorage.getItem("members")) || [];

    if (member.id !== null) {
      // selectedId가 있는 경우, 기존 멤버 수정
      existingMembers = existingMembers.map((m) =>
        m.id === member.id ? { ...m, ...member } : m
      );
    } else {
      console.log("새로운 멤버 추가", existingMembers.length);
      // 새로운 멤버 추가
      existingMembers.push({
        ...member,
        id: existingMembers.length + 1,
        joinDate: member.joinDate
          ? format(new Date(member.joinDate), "yyyy-MM-dd")
          : null,
      });
    }

    localStorage.setItem("members", JSON.stringify(existingMembers));
    setMembers(existingMembers);
    closeMemberModal();
  };

  const handleDeleteMember = (id) => {
    console.log(id);
    const existingMembers = JSON.parse(localStorage.getItem("members")) || [];
    const newMembers = existingMembers.filter((member) => member.id !== id);
    localStorage.setItem("members", JSON.stringify(newMembers));
    setMembers(newMembers);
    closeMemberModal();
  };

  return (
    <div>
      <Header onClickPlusButton={openMemberModal} />
      <MemberTable
        members={members}
        openModal={openMemberModal}
        onDelete={handleDeleteMember}
      />
    </div>
  );
};

export default MemberListPage;
