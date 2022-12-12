import React from "react";
import { SET_TOGGLE_REVIEW_STATUS } from "../../services/actions";
import { useDispatch, useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";
import { ReadMoreSpan } from "./styles";
interface IReadMore {
  status: boolean;
  children: string;
}
const ReadMore: React.FC<IReadMore> = ({ children, status }) => {
  const language = useSelector((store: any) => store.language);
  const dispatch = useDispatch();
  const toggleShowStatus = () => {
    dispatch({ type: SET_TOGGLE_REVIEW_STATUS, toggleReviewStatus: !status });
  };
  return (
    <div>
      {status ? children.slice(0, 150) : children}
      <ReadMoreSpan onClick={toggleShowStatus} className="read-or-hide">
        {status ? localiseString("interface:readMore", language) : localiseString("interface:readLess", language)}
      </ReadMoreSpan>
    </div>
  );
};

export default ReadMore;
