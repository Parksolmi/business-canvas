import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "../common/Checkbox";
import MoreButton from "../common/MoreButton";

const MemberTable = ({ members, openModal, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [openMoreMenuId, setOpenMoreMenuId] = useState(null);
  const moreMenuRef = useRef(null);

  // 바깥 클릭 감지 후 메뉴 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setOpenMoreMenuId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickMoreButton = (id) => {
    setOpenMoreMenuId((prev) => (prev === id ? null : id));
  };

  const handleEditMember = (id) => {
    openModal(id);
    setOpenMoreMenuId(null);
  };

  const handleDeleteMember = (id) => {
    window.confirm("정말 삭제하시겠습니까?") && onDelete(id);
    setOpenMoreMenuId(null);
  };

  return (
    <WrapperTable>
      <Table>
        <thead>
          <tr>
            <Th>
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </Th>
            <Th>
              <div>
                이름
                <img src="assets/png/dropdown-trigger.png" alt="filter" />
              </div>
            </Th>
            <Th>
              <div>
                주소
                <img src="assets/png/dropdown-trigger.png" alt="filter" />
              </div>
            </Th>
            <Th>
              <div>
                메모
                <img src="assets/png/dropdown-trigger.png" alt="filter" />
              </div>
            </Th>
            <Th>
              <div>
                가입일
                <img src="assets/png/dropdown-trigger.png" alt="filter" />
              </div>
            </Th>
            <Th>
              <div>
                직업
                <img src="assets/png/dropdown-trigger.png" alt="filter" />
              </div>
            </Th>
            <Th>
              <div>
                이메일 수신 동의
                <img src="assets/png/dropdown-trigger.png" alt="filter" />
              </div>
            </Th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <Tr key={member.id}>
              <Td $first={true}>
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </Td>
              <Td>{member.name}</Td>
              <Td>{member.address}</Td>
              <Td>{member.memo}</Td>
              <Td>{member.joinDate}</Td>
              <Td>{member.job}</Td>
              <Td>
                <div style={{ position: "relative" }}>
                  <Checkbox checked={member.emailAgreement} readOnly={true} />
                  <MoreButton
                    onClick={() => handleClickMoreButton(member.id)}
                  />
                  {openMoreMenuId === member.id && (
                    <MoreMenu ref={moreMenuRef}>
                      <MoreMenuItem onClick={() => handleEditMember(member.id)}>
                        수정
                      </MoreMenuItem>
                      <Divider />
                      <MoreMenuItem
                        $danger
                        onClick={() => handleDeleteMember(member.id)}
                      >
                        삭제
                      </MoreMenuItem>
                    </MoreMenu>
                  )}
                </div>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </WrapperTable>
  );
};

const WrapperTable = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;

  thead {
    background-color: #fafafa;
    border-top: 1px solid var(--Table-colorSplit, #0000000f);
    border-bottom: 1px solid var(--Table-colorSplit, #0000000f);
  }
`;

const Th = styled.th`
  position: relative;
  padding: 10px;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;

  &:not(:first-child):not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: #0000000f;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
  }

  img {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const Tr = styled.tr`
  border: 1px solid var(--Table-colorSplit, #0000000f);
`;

const Td = styled.td`
  padding: 10px;
  font-size: 0.9rem;
  border-right: ${({ $first }) => ($first ? "1px solid #0000000f" : "none")};
  vertical-align: middle;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MoreMenu = styled.div`
  position: absolute;
  top: 150%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 9px 28px 8px #0000000d, 0px 3px 6px -4px #0000001f,
    0px 6px 16px 0px #00000014;

  width: 100%;
  padding: 4px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const MoreMenuItem = styled.div`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ $danger }) => ($danger ? "red" : "black")};

  display: flex;
  justify-content: left;
  box-sizing: border-box;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #e3e3e3;
  margin: 0 4px;
`;

export default MemberTable;
