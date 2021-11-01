import React from 'react'

const NavbarItem = () => {
    const navitemsRus = ["Обо мне", "Сертификаты", "Отзывы", "Контакты"]
    return (
        <li>
            {navitemsRus.map(navItem => navItem)}
        </li>
    )
}

export default NavbarItem
