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
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 350px) {
    padding-top: 20px;
  padding-bottom: 10px;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;

  a {
    text-decoration: none;
    /* display: block; */
    color: #fff;
    font-family: "Tenor Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    padding-right: 35px;
    margin-top: 0;
  }
  @media (max-width: 350px) {
   flex-direction: column-reverse;
   align-items: stretch;
   a{
    margin-top: 15px;
   }
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
