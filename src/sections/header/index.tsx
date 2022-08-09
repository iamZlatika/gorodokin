import React from "react";
import styled from "@emotion/styled";
import Navbar from "./navbar";
import Localazer from "./localizer";

const HeaderProps = styled.div`
  background-color: #0e402d;
`;
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Tenor Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    padding-right: 35px;
  }
`;

const Header = () => {
  return (
    <HeaderProps>
      <Container>
        <Navbar />
        <RightSection>
          <a href="tel:+380996199029">+380996199029</a>
          <Localazer />
        </RightSection>
      </Container>
    </HeaderProps>
  );
};

export default Header;
