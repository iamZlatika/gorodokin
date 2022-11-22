import styled from "@emotion/styled";
import React from "react";
import { aboutMeInfo } from "../../data/aboutMe";
import aboutMePhoto from "../../images/photo/photo_02.jpg";
import Info from "./info";
import { useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";

const AboutMeStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 200px auto 120px auto;
  /* margin-top: 300px; */
  h2 {
    display: none;
  }
  img {
    display: block;
    border-radius: 0px 62px 0px 0px;
    width: 50%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 820px) {
    margin-top: 330px;
    flex-direction: column;
    img {
      width: 100%;
      height: 400px;
      margin-bottom: 18px;
    }
    h2 {
      display: block;
      font-weight: normal;
      font-size: 32px;
      line-height: 37px;
      font-family: "Tenor Sans", sans-serif;
      padding-top: 70px;
      padding-bottom: 13px;
    }
  }
`;

const AboutMe = () => {
    const language = useSelector((store: any) => store.language);
  return (
    <AboutMeStyle id="about_me">
      <h2>{localiseString("nav:aboutMe", language)} </h2>
      <img src={aboutMePhoto} alt="" />
      <Info info={aboutMeInfo} />
    </AboutMeStyle>
  );
};

export default AboutMe;
