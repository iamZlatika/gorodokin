import Button from "../buttons/Button";
import React, { useRef } from "react";
import { FormWrapper } from "./style";
import reviewPhoto from "../../images/photo/photo_04.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import {
  CLOSE_REVIEW_MODAL,
  SET_REVIEW_AGE,
  SET_REVIEW_NAME,
  SET_REVIEW_REVIEW,
  SET_REVIEW_SEX,
} from "../../services/actions";
import { useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";
import { useHistory } from "react-router-dom";

const FormReview: React.FC = () => {
  const language = useSelector((store: any) => store.language);
  const reviewInfo = useSelector((store: any) => store.reviewInfo);
  console.log({ reviewInfo });
  const form = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const reviewProps = {
    female: reviewInfo.femaleSex,
    male: reviewInfo.maleSex,
    name: reviewInfo.name,
    age: reviewInfo.age,
    review: reviewInfo.review,
  };

  const sendReview = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    await emailjs.send(`service_k3c5za7`, "template_4iau6fp", reviewProps, "user_fgTATP9b22WUPocctf0YA").then(
      (result) => {
        console.log("Message Sent, We will get back to you shortly", result.text);
      },
      (error) => {
        console.log("An error occurred, Please try again", error.text);
      }
    );
    history.push(`/successfully-send`, { background: history.location })
    dispatch({ type: SET_REVIEW_REVIEW, review: "" });
    dispatch({ type: SET_REVIEW_AGE, age: "" });
    dispatch({ type: SET_REVIEW_NAME, name: "" });
    dispatch({ type: SET_REVIEW_SEX, sex: { male: false, female: false } });
    dispatch({ type: CLOSE_REVIEW_MODAL });
  };

  const handleSetMale = () => {
    dispatch({ type: SET_REVIEW_SEX, sex: { male: true, female: false } });
  };
  const handleSetFemale = () => {
    dispatch({ type: SET_REVIEW_SEX, sex: { male: false, female: true } });
  };

  const handleSetName = (name: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_REVIEW_NAME, name: name.target.value });
  };
  const handleSetAge = (age: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_REVIEW_AGE, age: age.target.value });
  };
  const handleSetReview = (review: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log({ name: review });
    dispatch({ type: SET_REVIEW_REVIEW, review: review.target.value });
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
            <input
              type="radio"
              id="male"
              name="gender"
              value={reviewInfo.male}
              className="gender_checkbox"
              onChange={handleSetMale}
            />
            <label htmlFor="female">{localiseString("modal:female", language)}</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value={reviewInfo.female}
              className="gender_checkbox"
              onChange={handleSetFemale}
            />
          </div>
          <div className="user_name review_input">
            <label htmlFor="name">{localiseString("modal:name", language)}</label>
            <input
              id="name"
              placeholder={localiseString("modal:name", language)}
              name="name"
              value={reviewInfo.name}
              onChange={handleSetName}
            />
          </div>
          <div className="user_age review_input">
            <label htmlFor="age">{localiseString("modal:age", language)}</label>
            <input
              id="age"
              type="text"
              placeholder="18"
              name="age"
              value={reviewInfo.age.replace(/\D/g, "")}
              onChange={handleSetAge}
            />
          </div>
          <div className="user_review review_input">
            <label htmlFor="review">{localiseString("modal:yourReview", language)}</label>
            <textarea
              name="review"
              id="review"
              placeholder={localiseString("modal:yourReview", language)}
              value={reviewInfo.review}
              onChange={handleSetReview}
            ></textarea>
          </div>
        </div>
        <Button label={localiseString("modal:sendButton", language)} onClick={sendReview} color="light" />
      </div>
    </FormWrapper>
  );
};

export default FormReview;
