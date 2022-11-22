import Button from "../buttons/Button";
import React, { useRef } from "react";
import styled from "@emotion/styled";
import reviewPhoto from "../../images/photo/photo_04.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { CLOSE_REVIEW_MODAL } from "../../services/actions";
import { useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";

const FormWrapper = styled.form`
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

const FormReview: React.FC = () => {
  const language = useSelector((store: any) => store.language);
  const form = useRef();
  const dispatch = useDispatch();

  const sendReview = async (e: React.FormEvent) => {
    e.preventDefault();
    await emailjs.sendForm(`service_k3c5za7`, "template_4iau6fp", form.current, "user_fgTATP9b22WUPocctf0YA").then(
      (result) => {
        console.log("Message Sent, We will get back to you shortly", result.text);
      },
      (error) => {
        console.log("An error occurred, Please try again", error.text);
      }
    );
    dispatch({ type: CLOSE_REVIEW_MODAL });
  };

  return (
    <FormWrapper ref={form}>
      <img src={reviewPhoto} alt="doctor" />
      <div className="container">
        <div className="form_input_group">
          <div className="title">
            <h2>{localiseString("modal:review", language)}</h2>
            <div className="icon" onClick={() => dispatch({ type: CLOSE_REVIEW_MODAL })}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <div className="user_sex">
            <span>{localiseString("modal:gender", language)}</span>
            <label htmlFor="male">{localiseString("modal:male", language)}</label>
            <input type="radio" id="male" name="gender" value="male" className="gender_checkbox" />
            <label htmlFor="female">{localiseString("modal:female", language)}</label>
            <input type="radio" id="female" name="gender" value="female" className="gender_checkbox" />
          </div>
          <div className="user_name review_input">
            <label htmlFor="name">{localiseString("modal:name", language)}</label>
            <input id="name" placeholder={localiseString("modal:name", language)} name="name" />
          </div>
          <div className="user_age review_input">
            <label htmlFor="age">{localiseString("modal:age", language)}</label>
            <input id="age" type="number" placeholder="18" name="age" />
          </div>
          <div className="user_review review_input">
            <label htmlFor="review">{localiseString("modal:yourReview", language)}</label>
            <textarea name="review" id="review" placeholder={localiseString("modal:yourReview", language)}></textarea>
          </div>
        </div>
        <Button label={localiseString("modal:sendButton", language)} onClick={sendReview} color="light" />
      </div>
    </FormWrapper>
  );
};

export default FormReview;
