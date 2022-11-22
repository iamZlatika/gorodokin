import React from "react";
import Review from "./review";
import { useDispatch } from "react-redux";
import { OPEN_REVIEW_MODAL } from "../../services/actions";
import { useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";
import { ReviewsWrapper } from "./style";

const Reviews = () => {
  const language = useSelector((store: any) => store.language);
  const dispatch = useDispatch();
  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: OPEN_REVIEW_MODAL });
  };
  return (
    <ReviewsWrapper id="reviews">
      <div className="container">
        <div className="top">
          <div className="reviews-title">
            <h3>{localiseString("interface:reviews", language)}</h3>
            <p>{localiseString("interface:reviewsEpigraph", language)}</p>
          </div>

          <button onClick={(e) => onClick(e)} className="review_btn screen_btn">
            {localiseString("button:review", language)}
          </button>
        </div>
        <Review />
        <button onClick={(e) => onClick(e)} className="review_btn mobile_btn">
          {localiseString("button:review", language)}
        </button>
      </div>
    </ReviewsWrapper>
  );
};

export default Reviews;
