import styled from "@emotion/styled";
import React from "react";
import SocialNetItems from "../../components/social-nets";
import LeftShowcase from "./left-showcase-side";
import RightShowcase from "./right-showcase-side";

const ShowcaseWrapper = styled.div`
  background-color: #0e402d;
  color: #fff;
  height: 619px;
  font-family: "Tenor Sans", sans-serif;
  font-weight: 400;
  .wrapper {
    /* display: flex;
        flex-direction: row; */
    width: 90%;
    margin-left: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 820px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const Showcase = () => {
  return (
    <ShowcaseWrapper>
      <div className="wrapper">
        <LeftShowcase />
        <RightShowcase />
        <SocialNetItems element="showcase-screen" />
      </div>
    </ShowcaseWrapper>
  );
};

export default Showcase;
