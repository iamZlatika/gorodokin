import styled from '@emotion/styled'
import React from 'react'
import Arrow from '../../../components/arrow'
import femaleUser from '../../../images/icons/user-female.svg'
import maleUser from '../../../images/icons/user-male.svg'

interface ReviewProps {
    sex: string
}

const ReviewStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
padding-bottom: 200px;
align-items: center;

.user_icon{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 10px;
    position: relative;
    margin-right: 60px;
    height: 200px;
    img{
    z-index: 2;
    position: absolute;
    transform: rotate(-180deg);
    left: 10px;
    bottom: -160px;
    }
    .under{
    width: 221px;
    height: 64px;
    background: #FF8427;
    border-radius: 22px 0px 0px 0px;
    /* position: absolute; */
    transform: rotate(-180deg);
    
    z-index: 1
    }
}
.user_info{
    font-weight: 300;
    font-size: 18px;
    line-height: 130%;
    max-width: 515px;
    h3{
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 10px;
    }
    span{
        font-family: 'Tenor Sans', sans-serif;
        font-size: 16px;
        line-height: 19px;
        font-weight:400;
        margin-bottom: 18px;
        display: inline-block;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 130%;
    }
}

@media(max-width: 820px){
    
    padding-bottom: 50px;
    .user_icon{
       margin: 0;
    }
    .user_info{
        padding-top: 50px;
    }
}  
`
const Review: React.FC<ReviewProps> = ({ sex }) => {
    return (
        <ReviewStyled>
            <Arrow
                className="arrow_left"
                color="white"
                direction="left"
            />
            <div>
                <div className="user_icon">


                    <div className="under">
                        <img src={femaleUser} alt="" />
                    </div>

                </div>
                <div className="user_info">

                    <h3>Кристина Никитина</h3>
                    <span>27 лет</span>
                    <p>Антон - очень профессиональный психолог. У меня были проблемы с самоопредитением. Какие-то чувства тревоги и дискомфорта. У меня было деприссивное состояние. Антон мне помог, я полувствовала себя легче, более уверенной. Он помог в прямом смысле найти смысл жизни.</p>

                </div>
            </div>
            <Arrow
                color="white"
                direction="right"
                className="arrow_right"
            />
        </ReviewStyled>
    )
}

export default Review
