import Button from "../buttons/Button";
import React, { useRef } from "react"
import styled from "@emotion/styled";
import reviewPhoto from '../../images/photo/photo_04.jpg'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';
import { useDispatch } from "react-redux";
import { CLOSE_REVIEW_MODAL } from "../../services/actions"

interface IFormReview {
    onClose: (e: React.MouseEvent<HTMLElement>) => void,
}

const FormWrapper = styled.form`
position: absolute;
width: 70%;
height: 80%;
margin: 0 auto;
padding: 0;
z-index: 20;
border-radius: 0px 44px 0px 0px;
background: #FFFFFF;
left: 15%;
top: 7%;
font-family: "Raleway", sans-serif;
display: flex;
    img{
        width: 40%;
        object-fit: cover;
    }
    .container{
        padding-top: 32px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-between;
        margin: 0 auto;
        width: 50%;
        .form_input_group{
        .title{
        margin-bottom: 47px;
        display: flex;
        justify-content: space-between;
        h2{
            font-family: "Raleway", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 26px;
        }
        div{
            font-size: 20px;
            cursor: pointer;
        }
    }
    .review_input{
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        label{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 5px
        }
        input{
            height: 48px;
            background: #FFFFFF;
            border: 1px solid #C9C9C9;
            box-sizing: border-box;
            border-radius: 4px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            padding-left: 12px;
            color: #C9C9C9;
        }
        textarea{
            height: 65px;
            border: 1px solid #C9C9C9;
            box-sizing: border-box;
            border-radius: 4px;
            color: #C9C9C9;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            padding-left: 12px;
            padding-top: 12px;
        }
    }
    .user_sex{
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        }
    }
    }
    button{
        margin: 0 auto 32px;
    }
} 
`

const FormReview: React.FC<IFormReview> = ({ onClose }) => {
    const form = useRef();
    const dispatch = useDispatch()

    const sendReview = async (e: React.FormEvent) => {
        e.preventDefault()
        await emailjs.sendForm(`service_k3c5za7`, "template_4iau6fp", form.current, "user_fgTATP9b22WUPocctf0YA")
            .then((result) => {
                console.log("Message Sent, We will get back to you shortly", result.text);
            },
                (error) => {
                    console.log("An error occurred, Please try again", error.text);
                });
        dispatch({ type: CLOSE_REVIEW_MODAL })
    }

    return (
        <FormWrapper ref={form}>
            <img src={reviewPhoto} alt="" />
            <div className="container">
                <div className="form_input_group">
                    <div className="title">
                        <h2>???????????????? ??????????</h2>
                        <div
                            className="icon"
                            onClick={onClose}
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                            />
                        </div>
                    </div>
                    <div className="user_sex">
                        <span>??????</span>
                        <label htmlFor="male">??</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className="gender_checkbox" />
                        <label htmlFor="female">??</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="gender_checkbox" />

                    </div>
                    <div className="user_name review_input">
                        <label htmlFor="name">??????</label>
                        <input
                            id="name"
                            placeholder="??????"
                            name="name" />
                    </div>
                    <div className="user_age review_input">
                        <label htmlFor="age">??????????????</label>
                        <input
                            id="age"
                            type="number"
                            placeholder="0"
                            name="age" />
                    </div>
                    <div className="user_review review_input">
                        <label htmlFor="review">?????? ??????????</label>
                        <textarea
                            name="review"
                            id="review"
                            placeholder="??????????"

                        ></textarea>
                    </div>
                </div>
                <Button label="??????????????????" onClick={sendReview} color="light" />
            </div>
        </FormWrapper>
    )
};

export default FormReview;
