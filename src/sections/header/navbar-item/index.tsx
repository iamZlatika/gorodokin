import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "../../../services/hooks";
import { navItems } from "../../../data/navigation";
import { localiseString } from "../../../services/services";
interface NavbarItemProps {
  selected: boolean;
}

const NavbarItemWrapper = styled.li`
  display: block;

  cursor: pointer;
  a {
    font-family: "Raleway", sans-serif;
    list-style: none;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 820px) {
    padding-top: 70px;
    font-size: 20px;
  }
`;
const NavbarItem: React.FC<NavbarItemProps> = () => {
  const language = useSelector((store: any) => store.language);

  return (
    <>
      {navItems.map((navItem, i) => (
        <NavbarItemWrapper key={i}>
          <a href={`#${navItem.id}`}>{localiseString(navItem.label, language)}</a>
        </NavbarItemWrapper>
      ))}
    </>
  );
};

export default NavbarItem;
