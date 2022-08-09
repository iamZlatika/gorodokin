import styled from "@emotion/styled";
import React from "react";
import Button from "../../../components/buttons/Button";
import { useSelector } from "../../../services/hooks";
import { localiseString } from "../../../services/services";

const LeftShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  margin-left: 0;
  h2 {
    font-size: 80px;
    line-height: 94px;
    text-transform: uppercase;
    margin-top: 156px;
    user-select: none;
    font-style: normal;
    font-weight: normal;
  }
  h3 {
    font-family: Raleway;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    user-select: none;
    mask-type: 14px;
    margin-bottom: 67px;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 50px;
    }
  }
  @media (max-width: 820px) {
    width: 80%;
    margin: auto;

    h2 {
      margin-top: 15px;
      font-size: 46px;
      line-height: 54px;
    }
    h3 {
      margin-bottom: 25px;
    }
    button {
      margin: 0 auto 44px;
    }
  }
  @media (max-width: 350px) {
    h2 {
      font-size: 30px;
      line-height: 36px;
    }
  }
`;
const LeftShowcase = () => {
  const language = useSelector((store: any) => store.language);
  const onClick = () => {
    console.log("first btn clicked");
  };
  return (
    <LeftShowcaseWrapper>
      <h2>{localiseString("contacts:name", language)} </h2>
      <h3>{localiseString("interface:howCanIHelp", language)}</h3>
      <Button onClick={onClick} label={localiseString("button:checkIn", language)} color="default" />
    </LeftShowcaseWrapper>
  );
};

export default LeftShowcase;
