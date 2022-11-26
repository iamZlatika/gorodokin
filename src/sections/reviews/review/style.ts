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

        .pic-container {
          width: 221px;

          position: relative;
          /* transform: rotate(-180deg); */

         
          img {
            /* z-index: 2; */
            display: block;
          }
          .under {
            width: 221px;
            background: #ff8427;
            border-radius: 22px 0px 0px 0px;
            transform: rotate(-180deg);
            position: absolute;
            height: 64px;
            left: 25px;
            bottom: -20px;
            z-index: -1;
          }
        }
        .user_info {
          font-weight: 300;
          font-size: 18px;
          line-height: 130%;
          height: 100%;
          width: 570px;
          margin-top: 30px;
          margin-left: 50px;
          margin-right: 10px;
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
            .read-more {
              color: #ff8427;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .carusel-container {
      width: 485px;
      .reviews-carousel {
        width: 485px;
        .review-item {
          flex-direction: column;
          width: 485px;
          height: auto;
          .user_info {
            margin-right: 10px;
            margin-left: 10px;
            width: 485px;
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
            margin-left: 5px;
            margin-right: 5px;
            width: 289px;
            p {
            }
          }
        }
      }
    }
    @media (max-width: 390px) {
      .carusel-container {
        width: 227px;
        .reviews-carousel {
          width: 227px;
          .review-item {
            flex-direction: column;
            width: 227px;
            height: auto;
            .user_info {
              margin-left: 3px;
              margin-right: 2px;
              width: 227px;
              p {
                font-size: 16px;
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
