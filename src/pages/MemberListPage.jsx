import React, { useState } from "react";
import Header from "../components/common/Header";
import MemberTable from "../components/ui/MemberTable";
import useModal from "../hooks/useModal";
import MemberModal from "../components/ui/MemberModal";
import { format } from "date-fns";
import checkLocalEnv from "../utils/checkLocalEnv";

const MemberListPage = () => {
  const [members, setMembers] = useState(
    checkLocalEnv() ? JSON.parse(localStorage.getItem("members")) || [] : []
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
    if (checkLocalEnv()) {
      let existingMembers = JSON.parse(localStorage.getItem("members")) || [];

      if (member.id !== null) {
        // selectedId가 있는 경우, 기존 멤버 수정
        existingMembers = existingMembers.map((m) =>
          m.id === member.id ? { ...m, ...member } : m
        );
      } else {
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
    } else {
      alert("배포 서버에 데이터가 저장됩니다.");
    }
    closeMemberModal();
  };

  const handleDeleteMember = (id) => {
    if (checkLocalEnv()) {
      const existingMembers = JSON.parse(localStorage.getItem("members")) || [];
      const newMembers = existingMembers.filter((member) => member.id !== id);
      localStorage.setItem("members", JSON.stringify(newMembers));
      setMembers(newMembers);
    } else {
      alert("배포 서버에서 데이터가 삭제됩니다.");
    }
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
