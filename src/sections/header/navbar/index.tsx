import React from 'react'
import styled from "@emotion/styled";
import NavbarItem from '../navbar-item'

const NavbarWrapper = styled.ul`
   
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navbar: React.FC = () => {
    return (

        <NavbarWrapper>
            <NavbarItem selected={false}/>
        </NavbarWrapper>
    )
}

export default Navbar
