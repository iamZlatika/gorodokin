import styled from "@emotion/styled";
export const ReviewsWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  background-color: #0e402d;
  color: #fff;

  .container {
    width: 80%;
    margin: auto;

    .top {
      padding-top: 70px;
      display: flex;
      justify-content: space-between;
      padding-bottom: 60px;
      .reviews-title {
        width: 400px;
        h3 {
          font-size: 32px;
          line-height: 37px;
          color: #ff8427;
          font-weight: 400;
          font-family: "Tenor Sans", sans-serif;
          margin-bottom: 20px;
        }
        p {
          font-weight: 300;
          font-size: 16px;
          line-height: 130%;
        }
      }
      .review_btn {
        display: block;
        width: 327px;
        height: 52px;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 70px;
        background-color: #0e402d;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #fff;
      }
      .screen_btn {
        display: block;
        cursor: pointer;
      }
    }
    .mobile_btn {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .container {
      /* display: flex; */
      padding: 40px;
      .top {
        justify-content: space-around;
        /* margin-left: 50px; */
        .reviews-title {
          width: 492px;
        }
        .screen_btn {
          display: none;
        }
      }
      .mobile_btn {
        display: block;
        width: 327px;
        height: 52px;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 70px;
        background-color: #0e402d;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #fff;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 820px) {
    .container {
      padding: 0 0 70px 0;
      width: 95%;
      .top {
        justify-content: center;
        .screen_btn {
          display: none;
        }
        .reviews-title {
          width: 289px;
        }
      }
      .mobile_btn {
        display: block;
        width: 327px;
        height: 52px;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 70px;
        background-color: #0e402d;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #fff;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 390px) {
    .container {
      width: 90%;
      .top {
        justify-content: center;
        .screen_btn {
          display: none;
        }
        .reviews-title {
          width: 227px;
        }
      }
      .mobile_btn {
        display: block;
        width: 250px;
      }
    }
  }
`;
