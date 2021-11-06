import React from 'react'
import styled from "@emotion/styled";

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
  padding: 30px 68px 30px 0;
`
const NavbarItem: React.FC<NavbarItemProps> = () => {
    const navitemsRus = ["Обо мне", "Сертификаты", "Отзывы", "Контакты"]
    return (
        <>
            {navitemsRus.map((navItem, i) =>
                <NavbarItemWrapper key={i}>
                    {navItem}
                </NavbarItemWrapper>)}
        </>
    )
}

export default NavbarItem
