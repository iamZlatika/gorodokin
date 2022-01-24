import React from 'react'
import styled from "@emotion/styled";
import { NAV_ITEMS_RUS } from '../../../data/navigation'
interface NavbarItemProps {
    selected: boolean
}

const NavbarItemWrapper = styled.li`
    display: block;
  
  cursor: pointer;
  a{
    font-family: "Raleway", sans-serif;
  list-style: none;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: #fff;
    text-decoration: none;

  }
  @media (max-width: 820px){
      padding-top: 70px;
      font-size: 20px;
  }
`
const NavbarItem: React.FC<NavbarItemProps> = () => {
    return (
        <>
            {NAV_ITEMS_RUS.map((navItem, i) =>
                <NavbarItemWrapper
                    key={i}>
                    <a href={`#${navItem.id}`}>
                        {navItem.label}</a>
                </NavbarItemWrapper>
            )}
        </>
    )
}

export default NavbarItem
