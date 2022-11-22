import React, { useEffect, useRef } from "react";
import Arrow from "../../../components/arrow";
import femaleUser from "../../../images/icons/user-female.svg";
import maleUser from "../../../images/icons/user-male.svg";
import { Reviews } from "../../../data/reviews";
import { useDispatch, useSelector } from "../../../services/hooks";
import { SET_REVIEW_PROPS, SET_WINDOW_SIZE } from "../../../services/actions/index";
import { Size } from "../../../services/types";
import { useWindowSize } from "../../../services/services";
import { ReviewStyled } from "./style";

const Review = () => {
  const dispatch = useDispatch();
  const reviewRef = useRef<HTMLDivElement>();
  const offset = useSelector((store: any) => store.reviewProps.offset);
  const screenWidth = useSelector((state: any) => state.reviewProps.screenWidth);
  const mobileWidth = useSelector((state: any) => state.reviewProps.mobileWidth);

  const windowSize = useSelector((store: any) => store.windowSize);

  const size: Size = useWindowSize();

  useEffect(() => {
    dispatch({
      type: SET_REVIEW_PROPS,
      reviewProps: {
        offset: 0,
        screenWidth: 0,
        mobileWidth: 0,
      },
    });
  }, [windowSize]);

  const reviewStep = (size: Size) => {
    if (size.width >= 1200) {
      return 850;
    }
    if (size.width >= 820 && size.width < 1200) {
      return 492;
    }
    if (size.width < 820) {
      return 289;
    }
    // if (size.width >= 350 && size.width < 390) {
    //   return 280;
    // }
  };

  const switchLeft = () => {
    dispatch({
      type: SET_REVIEW_PROPS,
      reviewProps: {
        offset: offset - 1,
        screenWidth: screenWidth - reviewStep(size),
        mobileWidth: 0,
      },
    });
  };
  const switchRight = () => {
    dispatch({
      type: SET_REVIEW_PROPS,
      reviewProps: {
        offset: offset + 1,
        screenWidth: screenWidth + reviewStep(size),
        mobileWidth: 0,
      },
    });
  };
  useEffect(() => {
    reviewRef.current.style.transform = `translateX(-${screenWidth}px)`;
  }, [offset]);
  return (
    <ReviewStyled>
      <Arrow className="arrow_left" color="white" direction="left" onClick={switchLeft} disabled={offset <= 0} />
      <div className="carusel-container">
        <div className="reviews-carousel" ref={reviewRef}>
          {Reviews.map((review: any) => (
            <div className="review-item" key={review.id}>
              <div className="under">
                <img src={review.sex === "female" ? femaleUser : maleUser} alt="user-pick" />
              </div>
              <div className="user_info">
                <h3>{review.name}</h3>
                <span>{review.age}</span>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="user_icon">
          <div className="under">
            <img src={femaleUser} alt="user-pick" />
          </div>
        </div>
        <div className="user_info">
          <h3>Кристина Никитина</h3>
          <span>27 лет</span>
          <p>
            Антон - очень профессиональный психолог. У меня были проблемы с самоопредитением. Какие-то чувства тревоги и
            дискомфорта. У меня было деприссивное состояние. Антон мне помог, я полувствовала себя легче, более
            уверенной. Он помог в прямом смысле найти смысл жизни.
          </p>
        
        </div> */}
      <Arrow color="white" direction="right" className="arrow_right" onClick={switchRight} disabled={offset >= 7} />
    </ReviewStyled>
  );
};

export default Review;
