import styled from "@emotion/styled";
export const ReviewStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 30px;
  align-items: center;
  .carusel-container {
    width: 850px;
    overflow: hidden;
    .reviews-carousel {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      /* overflow: hidden; */
      width: 850px;
      transition: all ease 1s;
      position: relative;
      .review-item {
        width: 860px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* margin-left: 10px; */
        position: relative;
        /* margin-right: 60px; */
        height: 470px;

        .under {
          width: 221px;
          /* height: 64px; */
          background: #ff8427;
          border-radius: 22px 0px 0px 0px;
          /* position: absolute; */
          /* transform: rotate(-180deg); */

          z-index: 1;
          img {
            z-index: 2;
            display: block;
            /* position: relative; */
            /* transform: rotate(-180deg);
      left: 10px;
      bottom: -160px; */
          }
        }
        .user_info {
          font-weight: 300;
          font-size: 18px;
          line-height: 130%;
          height: 100%;
          width: 570px;
          margin-top: 30px;
          margin-left: 60px;
          /* max-width: 515px; */
          h3 {
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
            margin-bottom: 10px;
          }
          span {
            font-family: "Tenor Sans", sans-serif;
            font-size: 16px;
            line-height: 19px;
            font-weight: 400;
            margin-bottom: 18px;
            display: inline-block;
          }
          p {
            font-weight: 300;
            font-size: 18px;
            line-height: 130%;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .carusel-container {
      width: 492px;
      .reviews-carousel {
        width: 492px;
        .review-item {
          flex-direction: column;
          width: 492px;
          height: 760px;
          .user_info {
            margin-left: 0;
            /* margin: 0 20px; */
            width: 492px;
          }
        }
      }
    }
  }
  @media (max-width: 820px) {
    .carusel-container {
      width: 289px;
      .reviews-carousel {
        width: 289px;
        .review-item {
          flex-direction: column;
          width: 289px;
          height: auto;
          .user_info {
            margin-left: 0;

            /* margin: 0 20px; */
            width: 289px;
            p {
            }
          }
        }
      }
    }
    @media (max-width: 350px) {
      .carusel-container {
      width: 227px;
      .reviews-carousel {
        width: 227px;
        .review-item {
          flex-direction: column;
          width: 227px;
          height: auto;
          .user_info {
            margin-left: 0;

            /* margin: 0 20px; */
            width: 227px;
            p {
            }
          }
        }
      }
    }
}
    /* padding-bottom: 50px;
    .user_icon {
      margin: 0;
    }
    .user_info {
      padding-top: 50px;
    } */
  }
`;
