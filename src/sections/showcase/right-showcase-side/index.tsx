import styled from "@emotion/styled";
import React from "react";
import SocialNetItems from "../../../components/social-nets";
import showcasePhoto from "../../../images/photo/photo_01.jpg";
import { useSelector } from "../../../services/hooks";
import { localiseString } from "../../../services/services";

const RigthShowcaseWrapper = styled.div`
  position: relative;
  border-radius: 0px 0px 0px 62px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  img {
    height: 708px;
    width: 100%;
    border-radius: 0px 0px 0px 62px;
    object-fit: cover;
    position: relative;
  }
  h2 {
    display: block;
    position: absolute;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    user-select: none;
    bottom: 78px;
    left: 50px;
  }
  h3 {
    display: block;
    position: absolute;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    user-select: none;
    bottom: 51px;
    left: 50px;
  }
`;

const RightShowcase = () => {
    const language = useSelector((store: any) => store.language);
  return (
    <RigthShowcaseWrapper>
      <img src={showcasePhoto} alt="Антон Городокин" />

      <h2>{localiseString("contacts:name", language)}</h2>
      <h3>{localiseString("interface:profession", language)}</h3>

      <SocialNetItems element="showcase-mobile" />
    </RigthShowcaseWrapper>
  );
};

export default RightShowcase;
