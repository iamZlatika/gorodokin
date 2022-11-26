import styled from "@emotion/styled";

export const CertificateWrapper = styled.div`
  width: 90%;
  margin-right: auto;
  height: 800px;
  position: relative;
  display: flex;
  padding-left: 10%;
  flex-direction: column;
  align-items: center;
  .sert-title {
    width: 360px;
    display: flex;
    justify-content: center;

    h2 {
      margin-top: 110px;
      font-size: 32px;
      line-height: 37px;
      color: #1a181b;
      text-align: center;
      font-family: "Tenor Sans", sans-serif;
      font-weight: 400;
    }
  }
  .time_line {
    display: flex;
    height: 600px;
    /* margin-top: 230px; */
    flex-direction: row;
    overflow: hidden;
    width: 1002px;
    transition: all ease 1s;
    .time-slider {
      display: flex;
      flex-direction: row;
      transition: all ease 1s;
    }
    .cert-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      &:first-child div:first-child{
        /* background: linear-gradient(
          5475 90deg,
          rgba(151, 154, 153, 1) 0%,
          rgba(151, 154, 153, 1) 36%,
          rgba(14, 64, 45, 1) 100%,
          rgba(14, 64, 45, 1) 100%
        ); */
        /* background: red; */
        opacity: 0.3;
      }
      .cert-image {
        position: absolute;
        max-width: 300px;
        max-height: 300px;
        display: block;
        top: 40px;
      }
      &:last-child div div:nth-of-type(3) {
        background: linear-gradient(
          90deg,
          rgba(151, 154, 153, 1) 0%,
          rgba(151, 154, 153, 1) 36%,
          rgba(14, 64, 45, 1) 100%,
          rgba(14, 64, 45, 1) 100%
        );
        transform: rotate(180deg);
        opacity: 0.3;
      }
      h4 {
        margin-bottom: 30px;
      }
      .cert-pic {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .cert-text {
        max-width: 250px;
        text-align: center;
        height: 214px;
        p {
          font-family: "Raleway", sans-serif;
        }
        .cert-action {
          display: none;
        }
        h3 {
          display: none;
        }
      }
    }
  }
  .certificates_nav {
    position: absolute;
    bottom: 32px;
    display: flex;
    width: 100px;
    justify-content: space-between;
    right: 0;
  }
  @media (max-width: 1200px) {
    /* height: auto; */
    .cert-image {
      display: block;
      width: 210px;
    }
    .cert-text {
      width: 180px;
      height: 112px;
      .cert-action {
        display: none;
      }
      p {
        font-size: 14px;
      }
    }
    .time_line {
      width: 642px;
    }
  }
  @media (max-width: 820px) {
    height: auto;
    .sert-title {
      justify-content: flex-start;
      width: 320px;
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
    }

    .time_line {
      width: 100%;
      height: 642px;
      margin-top: 20px;
      margin-bottom: 30px;
      flex-direction: column;
      .time-slider {
        flex-direction: column;
      }
      .cert-item {
        flex-direction: row;
        justify-content: center;
        .cert-image {
          display: none;
        }
        h4 {
          display: none;
        }
        .cert-pic {
          flex-direction: column;
          &div:nth-of-type(2n) {
          }
        }
        .cert-text {
          transform: translateY(25px);
          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 10px;
          padding: 12px;
          width: auto;
          text-align: start;
          font-family: "Raleway", sans-serif;
          font-size: 15px;
          line-height: 130%;
          margin-left: 28px;
          height: auto;
          .cert-action {
            display: inline;
            color: #ff8427;
            font-weight: 800;
            user-select: none;
            cursor: pointer;
          }
          h3 {
            font-family: "Tenor Sans", sans-serif;
            font-size: 20px;
            line-height: 23px;
          }
        }
      }
    }
    .certificates_nav {
      position: static;
      margin-bottom: 60px;
      width: 320px;
    }
  }
  @media (max-width: 350px) {
    .time-slider {
      flex-direction: column;
    }
    .sert-title {
      width: 255px;
    }

    .certificates_nav {
      width: 255px;
    }
  }
`;
