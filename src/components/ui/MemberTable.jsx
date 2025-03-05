import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "../common/Checkbox";
import MoreButton from "../common/MoreButton";
import PropTypes from "prop-types";

const MemberTable = ({ members, openModal, onDelete }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [openMoreMenuId, setOpenMoreMenuId] = useState(null);

  const moreMenuRef = useRef(null);
  const filterMenuRef = useRef(null);

  const [openFilter, setOpenFilter] = useState(null);
  const [filters, setFilters] = useState({
    name: [],
    address: [],
    memo: [],
    joinDate: [],
    job: [],
    emailAgreement: [],
  });

  const filteredMembers = members.filter((member) =>
    Object.keys(filters).every(
      (key) => filters[key].length === 0 || filters[key].includes(member[key])
    )
  );

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

  // 필터링
  const toggleFilterMenu = (field) => {
    setOpenFilter((prev) => (prev === field ? null : field));
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[field] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return { ...prevFilters, [field]: updatedValues };
    });
  };

  // 체크박스
  const handleRowCheckbox = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((memberId) => memberId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedMembers.length === filteredMembers.length) {
      setSelectedMembers([]); // 전체 해제
    } else {
      setSelectedMembers(filteredMembers.map((member) => member.id)); // 전체 선택
    }
  };

  // 클릭 감지 후 메뉴 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      // MoreMenu 바깥 클릭 감지
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setOpenMoreMenuId(null);
      }
      // FilterMenu 바깥 클릭 감지
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setOpenFilter(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <WrapperTable>
      <Table>
        <thead>
          <tr>
            <Th>
              <Checkbox
                checked={
                  selectedMembers.length === filteredMembers.length &&
                  selectedMembers.length > 0
                }
                onChange={handleSelectAll}
              />
            </Th>
            {[
              "name",
              "address",
              "memo",
              "joinDate",
              "job",
              "emailAgreement",
            ].map((field, index) => (
              <Th key={index}>
                <div>
                  {field === "name"
                    ? "이름"
                    : field === "address"
                    ? "주소"
                    : field === "memo"
                    ? "메모"
                    : field === "joinDate"
                    ? "가입일"
                    : field === "job"
                    ? "직업"
                    : field === "emailAgreement"
                    ? "이메일 수신 동의"
                    : field}
                  <FilterIcon onClick={() => toggleFilterMenu(field)}>
                    <img src="assets/png/filter-icon.png" alt="filter" />
                  </FilterIcon>
                  {openFilter === field && (
                    <FilterMenu ref={filterMenuRef}>
                      {Array.from(new Set(members.map((m) => m[field]))).map(
                        (value) => (
                          <FilterItem key={value}>
                            <Checkbox
                              checked={filters[field].includes(value)}
                              onChange={() => handleFilterChange(field, value)}
                              label={
                                field === "emailAgreement"
                                  ? value
                                    ? "선택됨"
                                    : "선택 안함"
                                  : value
                              }
                            />
                          </FilterItem>
                        )
                      )}
                    </FilterMenu>
                  )}
                </div>
              </Th>
            ))}
            <Th> </Th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <Tr key={member.id}>
              <Td>
                <Checkbox
                  checked={selectedMembers.includes(member.id)}
                  onChange={() => handleRowCheckbox(member.id)}
                />
              </Td>
              <Td>{member.name}</Td>
              <Td>{member.address}</Td>
              <Td>{member.memo}</Td>
              <Td>{member.joinDate}</Td>
              <Td>{member.job}</Td>
              <Td>
                <Checkbox checked={member.emailAgreement} readOnly={true} />
              </Td>
              <Td>
                <div style={{ position: "relative" }}>
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

MemberTable.propTypes = {
  members: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const WrapperTable = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  table-layout: fixed;

  thead {
    background-color: #fafafa;
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  }
`;

const Th = styled.th`
  position: relative;
  padding: 10px;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  vertical-align: middle;

  &:not(:first-child):not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: ${({ theme }) => theme.colors.divider};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:first-child,
  &:last-child {
    width: 2.5rem;
    white-space: nowrap;
  }
`;

const FilterIcon = styled.div`
  cursor: pointer;
  img {
    width: 1.3em;
    height: 1.3rem;
  }
`;

const FilterMenu = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 9px 28px 8px #0000000d, 0px 3px 6px -4px #0000001f,
    0px 6px 16px 0px #00000014;

  width: auto;
  min-width: 90%;

  padding: 10px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FilterItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Tr = styled.tr`
  border: 1px solid ${({ theme }) => theme.colors.divider};
`;

const Td = styled.td`
  padding: 5px 10px;
  font-size: 0.9rem;
  vertical-align: middle;

  width: auto;
  white-space: nowrap;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.divider};
  }

  &:nth-last-child(2) {
    border-right: none;
  }

  &:first-child,
  &:last-child {
    width: 2.5rem;
    white-space: nowrap;
  }
`;

const MoreMenu = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 9px 28px 8px #0000000d;

  width: 200px;
  padding: 4px;
  z-index: 100;

  display: flex;
  flex-direction: column;
`;

const MoreMenuItem = styled.div`
  width: 100%;
  padding: 10px;
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
  background: ${({ theme }) => theme.colors.border};
`;

export default MemberTable;
