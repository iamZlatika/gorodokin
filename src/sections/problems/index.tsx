import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";
import HelpListWrapper from "./proplems-list";

const ProblemsWrapper = styled.div`
  background-color: #0e402d;
  padding-top: 120px;
  div {
    width: 80%;
    margin: auto;
    h2 {
      font-size: 32px;
      line-height: 37px;
      color: #ff8427;
    }
  }
  @media (max-width: 1200px) {
    text-align: center;
  }
  @media (max-width: 820px) {
    text-align: start;
  }
`;

const Problems = () => {
  const language = useSelector((store: any) => store.language);
 
  return (
    <ProblemsWrapper id="problems">
      <div>
        <h2>{localiseString("interface:howCanIHelp", language)}</h2>
        <HelpListWrapper />
      </div>
    </ProblemsWrapper>
  );
};

export default Problems;
