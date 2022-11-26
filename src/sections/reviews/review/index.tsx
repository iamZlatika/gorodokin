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
import { localiseString } from "../../../services/services";
//@ts-ignore
import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMore from "../../../components/readMore/ReadMore";

const Review = () => {
  const dispatch = useDispatch();
  const language = useSelector((store: any) => store.language);
  const toggleReviewStatus = useSelector((store: any) => store.toggleReviewStatus);
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
        toggleReviewStatus: true,
      },
    });
  }, [windowSize]);

  const reviewStep = (size: Size) => {
    if (size.width >= 1200) {
      return 850;
    }
    if (size.width >= 820 && size.width < 1200) {
      return 485;
    }
    if (size.width < 820 && size.width > 390) {
      return 289;
    }
    if (size.width >= 350 && size.width <= 390) {
      return 227;
    }
  };

  const switchLeft = () => {
    dispatch({
      type: SET_REVIEW_PROPS,
      reviewProps: {
        offset: offset - 1,
        screenWidth: screenWidth - reviewStep(size),
        mobileWidth: 0,
        toggleReviewStatus: true
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
        toggleReviewStatus: true
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
              <div className="pic-container">
                <img src={review.sex === "female" ? femaleUser : maleUser} alt="user-pick" />
                <div className="under"></div>
              </div>
              <div className="user_info">
                <h3>{review.name}</h3>
                <span>{review.age}</span>
                <p>
                  <ReadMore status={toggleReviewStatus}>{review.review}</ReadMore>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Arrow color="white" direction="right" className="arrow_right" onClick={switchRight} disabled={offset >= 7} />
    </ReviewStyled>
  );
};

export default Review;
