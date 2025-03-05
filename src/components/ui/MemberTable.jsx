import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../common/Checkbox";

// 더미 데이터
const members = [
  {
    id: 1,
    name: "John Doe",
    address: "서울 강남구",
    memo: "외국인",
    joinDate: "2024-10-02",
    job: "개발자",
    emailConsent: true,
  },
  {
    id: 2,
    name: "Foo Bar",
    address: "서울 서초구",
    memo: "한국인",
    joinDate: "2024-10-01",
    job: "PO",
    emailConsent: false,
  },
];

const MemberTable = () => {
  const [checked, setChecked] = useState(false);

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
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
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
    height: 60%; /* 세로 길이 조절 */
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
`;

// const Checkbox = styled.input`
//   cursor: pointer;
//   width: 18px;
//   height: 18px;
// `;

export default MemberTable;
