import React from 'react'
import styled from "@emotion/styled";
import NavbarItem from '../navbar-item'
import Exit from '../../../components/exit/exit';

const NavbarWrapper = styled.ul`
    padding-left: 38px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 0;
    
    @media (max-width: 820px){
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    right: -350px;
    z-index: 10;
    background-color: #0D402D;
    height: 100%;
    top: 0%;
    margin-right: 30px;
    transform: translateX(350px);
    border-radius: 0px 0px 0px 34px;
    }

`

const Navbar: React.FC = () => {
    return (

        <NavbarWrapper>
            <Exit />
            <NavbarItem selected={false}/>
        </NavbarWrapper>
    )
}

export default Navbar
