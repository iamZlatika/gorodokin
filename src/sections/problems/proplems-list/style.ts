import styled from "@emotion/styled";

export const ProblemsListWrapper = styled.div`
  width: 100% !important;
  display: grid;
  margin: 0 !important;
  justify-content: flex-start;
  padding-bottom: 120px;
  color: #fff;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  div {
    margin-top: 0;
    h3 {
      display: block;
      margin-top: 83px;
      font-size: 18px;
      line-height: 21px;
      padding-bottom: 61px;
      font-family: "Raleway", sans-serif;
      height: 103px ;
    }
  }
  @media (max-width: 1200px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    .list-wrapper {
      width: 100%;
    }
  }
`;
