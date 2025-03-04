import React from 'react';
import Header from '../components/common/Header';
import MemberTable from '../components/ui/MemberTable';


// 더미데이터
const dummyMembers = [
    {
        name: "김철수",
        address: "서울특별시 강남구",
        memo: "VIP 고객",
        joinDate: "2023-05-10",
        job: "소프트웨어 엔지니어",
        emailConsent: true,
    },
    {
        name: "이영희",
        address: "부산광역시 해운대구",
        memo: "문의 많이 함",
        joinDate: "2022-12-22",
        job: "마케터",
        emailConsent: false,
    },
];


const MemberListPage = () => {
    return (
        <div>
            <Header/>
            <MemberTable/>
        </div>
    );
};

export default MemberListPage;