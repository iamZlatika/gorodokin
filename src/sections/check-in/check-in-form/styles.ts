import styled from "@emotion/styled";

export const CheckInFormStyled = styled.div`
  width: 40%;
  margin-right: 10px;
  margin-top: 40px;
  h2 {
    font-family: "Tenor Sans", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 10px;
    color: #ff8427;
  }
  span {
    font-size: 14px;
    line-height: 16px;
    font-family: "Raleway", sans-serif;
    color: #1a181b;
    display: inline-block;
  }
  form {
    width: 100%;
    font-family: "Raleway", sans-serif;
    .datepicker_group {
      display: flex;
      margin-top: 25px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .input_group {
    margin-bottom: 40px;
  }

  @media (max-width: 820px) {
    width: 100%;
    form {
      button {
        margin: 0 auto;
      }
    }
  }
`;