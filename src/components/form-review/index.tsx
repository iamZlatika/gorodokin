import Button from "../buttons/Button";
import React from "react"
import styled from "@emotion/styled";
import reviewPhoto from '../../images/photo/photo_04.jpg'

interface IFormReview {

}

const FormWrapper = styled.form`
position: absolute;

height: 509px;
z-index: 10;
border-radius: 0px 44px 0px 0px;
background: #FFFFFF;
left: 5%;
top: 7%;
font-family: "Raleway", sans-serif;
display: flex;
    img{
        width: 433px;
    }
    container{}
    width: 
    padding: 32px 32px 37px 47px;
        .title{
             margin-bottom: 47px;
             display: flex;
             justify-content: space-between;
            h2{
             font-family: "Raleway", sans-serif;
              font-size: 22px;
              line-height: 26px;
             }
            div{
                font-size: 20px;
             }
        }
        .sex{
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .sex_checkbox{

            }
         }
    }
`

const FormReview: React.FC<IFormReview> = ({ }) => {

    const sendReview = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <FormWrapper>
            <img src={reviewPhoto} alt="" />
            <div className="container">
                <div className="title">
                    <h2>Оставить отзыв</h2>
                    <div>X</div>
                </div>
                <div className="sex">
                    <span>Пол</span>
                    <input type="radio" id="male" name="sex" className="sex_checkbox" />
                    <label htmlFor="male" />
                    <input type="radio" id="female" name="sex" className="sex_checkbox" />
                    <label htmlFor="female" />
                </div>
                <div className="age">
                    <input type="number" />
                </div>
                <textarea name="" id="" ></textarea>
                <Button label="Отправить" onClick={sendReview} color="light" />
            </div>
        </FormWrapper>
    )
};

export default FormReview;
