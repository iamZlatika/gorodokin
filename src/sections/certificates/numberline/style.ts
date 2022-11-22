import styled from "@emotion/styled";
export const NumberLineStyled = styled.div`
  position: absolute;
  top: 240px;
  left: 50px;
  height: 360px;
  overflow: hidden;
  width: 36px;
  transition: all ease 1s;
  display: flex;
  justify-content: space-around;
  .number-slider {
    display: flex;
    transform: translateX(0);
    flex-direction: column;
    transition: all ease 1s;
  }
  .side-line {
    .side-line_title {
      margin-top: 3px;
      display: flex;
      flex-direction: row;
      .side-dot {
        border: 1px solid #0e402d;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        transform: translateX(-6px);
      }
    }
    .line {
      width: 2px;
      height: 150px;
      background-color: #1d7874;
      opacity: 0.3;
    }

    &:last-child .line {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    top: 100px;
  }
  @media (max-width: 820px) {
    display: flex;
    width: 299px;
    height: 60px;
    position: static;
    right: 0;
    top: 0px;
    justify-content: flex-start;
    margin-left: 0px;
    .number-slider {
      flex-direction: row;
    }
    .side-line {
      .side-line_title {
        flex-direction: column-reverse;

        width: 20px;

        .side-dot {
          /* transform: translateX(10px);*/
          transform: translateY(10px);
          width: 20px;
          height: 20px;
        }
        span {
          display: flex;
          width: 20px;
          font-size: 16px;
          line-height: 19px;
          transform: translateY(8px);
          margin-left: 6px;
        }
      }
      .line {
        width: 119px;
        height: 2px;
        margin-left: 20px;
        opacity: 0.3;
      }
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 350px) {
    display: none;
    .side-line {
      .line {
        width: 80px;
      }
    }
  }
`;
