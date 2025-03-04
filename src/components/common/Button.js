import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = ({ onClick, children, type = 'button', className = '' }) => {
    return (
        <WrapperButton type={type} className={`btn ${className}`} onClick={onClick}>
            <img src="/png/plus_outlined.png" alt="plus"/>
            {children}
        </WrapperButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
};

const WrapperButton = styled.button`
    font-family: Pretendard;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0%;
    padding: 0.3rem 0.75rem;
    background-color: #4A7CFE;
    color: #fff;                       
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    &:hover {
        background-color: #739FFF;
    }
    &:active {
        background-color: #345DD9;
    }

    img {
        width: 1rem;
        height: 1rem;
    }
`;

export default Button;