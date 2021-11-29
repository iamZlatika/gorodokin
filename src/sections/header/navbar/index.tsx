import React from 'react'
import styled from "@emotion/styled";
import NavbarItem from '../navbar-item'

const NavbarWrapper = styled.ul`
   
  width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
`

const Navbar: React.FC = () => {
    return (

        <NavbarWrapper>
            <NavbarItem selected={false}/>
        </NavbarWrapper>
    )
}

export default Navbar
