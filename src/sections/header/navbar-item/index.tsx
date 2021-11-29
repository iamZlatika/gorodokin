import React from 'react'
import styled from "@emotion/styled";
import { NAV_ITEMS_RUS } from '../../../data/navigation'
interface NavbarItemProps {
    selected: boolean
}

const NavbarItemWrapper = styled.li`
  font-family: "Raleway", sans-serif;
  display: block;
  list-style: none;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: #fff;
 
`
const NavbarItem: React.FC<NavbarItemProps> = () => {
    return (
        <>
            {NAV_ITEMS_RUS.map((navItem, i) =>
                <NavbarItemWrapper key={i}>
                    {navItem}
                </NavbarItemWrapper>)}
        </>
    )
}

export default NavbarItem
