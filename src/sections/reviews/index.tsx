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
       .review_btn{
            width: 327px;
            height: 52px;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 70px;
            background-color: #0E402D;
            font-family: Raleway;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            color: #fff
       }
       .screen_btn{
            display: block;
        }
        
    }
    .mobile_btn{
            display: none;
        }
}
@media(max-width: 820px){
    .container{
    padding-bottom: 70px;
    .top{
        justify-content: center;
        .screen_btn{
            display: none;
        }
        .reviews-title{
            width: 100%;
        }
       
    } 
    .mobile_btn{
            display: block;
            width: 327px;
            height: 52px;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 70px;
            background-color: #0E402D;
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
@media(max-width: 350px){
    .container{
        width: 90%;
    .mobile_btn{
        display: block;
            width: 250px;
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
        <ReviewsWrapper id="reviews">
            <div className="container">
                <div className="top">
                    <div className="reviews-title">
                        <h3>Отзывы</h3>
                        <p>Я знаю как сложно выбрать доктора, который подходит именно тебе. С этими людьми мы нашли общий язык и я с удовольствием остаюсь
                            их лечащим врачем долгие годы</p>
                    </div>

                    <button
                        onClick={(e) => onClick(e)}
                        className='review_btn screen_btn'
                    >
                        Оставить отзыв
                    </button>
                </div>
                <Review sex="female" />
                <button
                    onClick={(e) => onClick(e)}
                    className='review_btn mobile_btn'
                >
                    Оставить отзыв
                </button>
            </div>
        </ReviewsWrapper>
    )
}

export default Reviews
