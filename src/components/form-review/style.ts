import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  position: absolute;
  width: 70%;
  height: 80%;
  margin: 0 auto;
  padding: 0;
  z-index: 20;
  border-radius: 0px 44px 0px 0px;
  background: #ffffff;
  left: 15%;
  top: 7%;
  font-family: "Raleway", sans-serif;
  display: flex;
  overflowY: "visible";
  img {
    width: 40%;
    object-fit: cover;
    display: block;
  }
  .container {
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    margin: 0 auto;
    width: 50%;
    .form_input_group {
      .title {
        margin-bottom: 47px;
        display: flex;
        justify-content: space-between;
        h2 {
          font-family: "Raleway", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 26px;
        }
        div {
          font-size: 20px;
          cursor: pointer;
        }
      }
      .review_input {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        label {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          margin-bottom: 5px;
        }
        input {
          height: 48px;
          background: #ffffff;
          border: 1px solid #c9c9c9;
          box-sizing: border-box;
          border-radius: 4px;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          padding-left: 12px;
        }
        textarea {
          height: 65px;
          border: 1px solid #c9c9c9;
          box-sizing: border-box;
          border-radius: 4px;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          padding-left: 12px;
          padding-top: 12px;
        }
      }
      .user_sex {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
      }
    }
  }
  button {
    margin: 0 auto 32px;
  }
  @media (max-width: 820px) {
    height: 600px;
    img {
      display: none;
    }
    .container {
      width: 95%;
    }
  }
`;
