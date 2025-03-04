import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {
    return (
        <WrapperHeader>
            <h3>회원 목록</h3>
            <Button children={"추가"} onClick={()=>{}}/>
        </WrapperHeader>
    );
};

const WrapperHeader = styled.header`
    font-family: Pretendard;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0%;
    padding: 0.75rem 0.875rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;



export default Header;