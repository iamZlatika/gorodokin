import styled from '@emotion/styled'
import React from 'react'
import Button from '../../components/buttons/Button'
import Review from './review'

const ReviewsWrapper = styled.div`
 font-family: "Raleway", sans-serif;
background-color: #0E402D;
color: #fff;
.container{
    width: 80%;
    margin: auto;
    .top{
        padding-top: 130px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 60px;
        .reviews-title{
            width: 400px;
            h3{
            font-size: 32px;
            line-height: 37px;
            color: #FF8427;
            font-weight: 400;
            font-family: 'Tenor Sans', sans-serif;
            margin-bottom: 20px;
            }
            p{
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            }
        }
        button{
           height: 52px;
        }
    }
}

`

const Reviews = () => {

    const onClick = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log("review")
    }
    return (
        <ReviewsWrapper>
            <div className="container">
                <div className="top">
                    <div className="reviews-title">
                        <h3>Отзывы</h3>
                        <p>Я знаю как сложно выбрать доктора, который подходит именно тебе. С этими людьми мы нашли общий язык и я с удовольствием остаюсь
                            их лечащим врачем долгие годы</p>
                    </div>
                    <Button
                        label="Оставить отзыв"
                        color="light"
                        onClick={(e) => onClick(e)}
                    />

                </div>
                <Review sex="female"/>

            </div>
        </ReviewsWrapper>
    )
}

export default Reviews
