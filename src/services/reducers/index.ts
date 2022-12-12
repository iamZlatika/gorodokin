import {
  SET_LANGUAGE,
  OPEN_REVIEW_MODAL,
  OPEN_CERTIFICATE_MODAL,
  CLOSE_CERTIFICATE_MODAL,
  CLOSE_REVIEW_MODAL,
  CHECK_IN,
  IS_INVALID_NAME,
  IS_VALID_NAME,
  IS_INVALID_PHONE,
  IS_VALID_PHONE,
  SET_NAME,
  SET_PHONE,
  SET_DATE,
  SET_TIME,
  CLOSE_MODAL,
  SET_CERTIFICATE_PROPS,
  SET_WINDOW_SIZE,
  SET_REVIEW_PROPS,
  SET_TOGGLE_REVIEW_STATUS,
  SET_WINDOW_WIDTH,
  SET_REVIEW_AGE,
  SET_REVIEW_NAME,
  SET_REVIEW_REVIEW,
  SET_REVIEW_SEX,
  SET_REVIEW_SUCCESS_STATUS,
} from "../actions";
import { ActionsTypes } from "../actions";
import { dictionary } from "../../data/localisation";
import { ILocalisation, ReviewInfo } from "../types";

interface initialStateProps {
  language: string;
  reviewStatus: boolean;
  certificatesStatus: boolean;
  isInvalidInputPhoneValue: boolean;
  isInvalidInputNameValue: boolean;
  userInfo: {
    name: string | null;
    phone: string | null;
    time: string | null;
    date: string | null;
  };
  toggleReviewStatus: boolean;
  showConfirmModal: boolean;
  certificateToShow: string;
  localisation: ILocalisation;
  certificateProps: {
    screenTimeWidth: number;
    mobileTimeHeight: number;
    screenNumberWidth: number;
    mobileNumberWidth: number;
    offset: number;
  };
  windowSize: {
    width: number | undefined;
    height: number | undefined;
  };
  windowWidth: {
    width: number | undefined;
  };
  reviewProps: {
    screenWidth: number;
    offset: number;
  };
  reviewInfo: ReviewInfo;
  reviewSuccessStatus: boolean
}

const initialState: initialStateProps = {
  language: "ua",
  reviewStatus: false,
  certificatesStatus: false,
  isInvalidInputPhoneValue: false,
  isInvalidInputNameValue: false,
  userInfo: {
    name: null,
    phone: null,
    time: null,
    date: null,
  },
  toggleReviewStatus: true,
  showConfirmModal: false,
  certificateToShow: undefined,
  localisation: dictionary,
  certificateProps: {
    screenTimeWidth: 0,
    screenNumberWidth: 0,
    mobileTimeHeight: 0,
    mobileNumberWidth: 274,
    offset: 0,
  },
  windowSize: {
    width: undefined,
    height: undefined,
  },
  windowWidth: {
    width: undefined,
  },
  reviewProps: {
    screenWidth: 0,
    offset: 0,
  },
  reviewInfo: {
    maleSex: false,
    femaleSex: false,
    name: "",
    age: "",
    review: "",
  },
  reviewSuccessStatus: false,
};

export const rootReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.language,
      };
    }
    case OPEN_REVIEW_MODAL: {
      return {
        ...state,
        reviewStatus: true,
      };
    }
    case OPEN_CERTIFICATE_MODAL: {
      return {
        ...state,
        certificatesStatus: true,
        certificateToShow: action.id,
      };
    }
    case CLOSE_CERTIFICATE_MODAL: {
      return {
        ...state,
        certificatesStatus: false,
        certificateToShow: "",
      };
    }
    case CLOSE_REVIEW_MODAL: {
      return {
        ...state,
        reviewStatus: false,
      };
    }
    case IS_INVALID_PHONE: {
      return {
        ...state,
        isInvalidInputPhoneValue: true,
      };
    }
    case IS_VALID_PHONE: {
      return {
        ...state,
        isInvalidInputPhoneValue: false,
      };
    }
    case IS_INVALID_NAME: {
      return {
        ...state,
        isInvalidInputNameValue: true,
      };
    }
    case IS_VALID_NAME: {
      return {
        ...state,
        isInvalidInputNameValue: false,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          name: action.name,
        },
      };
    }
    case SET_PHONE: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          phone: action.phone,
        },
      };
    }
    case SET_DATE: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          date: action.date,
          time: null,
        },
      };
    }
    case SET_TIME: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          time: action.time,
        },
      };
    }
    case CHECK_IN: {
      return {
        ...state,
        showConfirmModal: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        showConfirmModal: false,
      };
    }
    case SET_CERTIFICATE_PROPS: {
      return {
        ...state,
        certificateProps: action.certificateProps,
      };
    }
    case SET_REVIEW_PROPS: {
      return {
        ...state,
        reviewProps: action.reviewProps,
        toggleReviewStatus: action.reviewProps.toggleReviewStatus,
      };
    }
    case SET_WINDOW_SIZE: {
      return {
        ...state,
        windowSize: action.windowSizeProps,
      };
    }
    case SET_WINDOW_WIDTH: {
      return {
        ...state,
        windowWidth: action.windowWidthProps,
      };
    }
    case SET_TOGGLE_REVIEW_STATUS: {
      return {
        ...state,
        toggleReviewStatus: action.toggleReviewStatus,
      };
    }
    case SET_REVIEW_REVIEW: {
      return {
        ...state,
        reviewInfo: { ...state.reviewInfo, review: action.review },
      };
    }
    case SET_REVIEW_NAME: {
      return {
        ...state,
        reviewInfo: { ...state.reviewInfo, name: action.name },
      };
    }
    case SET_REVIEW_AGE: {
      return {
        ...state,
        reviewInfo: { ...state.reviewInfo, age: action.age },
      };
    }
    case SET_REVIEW_SEX: {
      return {
        ...state,
        reviewInfo: { ...state.reviewInfo, maleSex: action.sex.male, femaleSex: action.sex.female },
      };
    }
    case SET_REVIEW_SUCCESS_STATUS: {
      return {
        ...state,
        reviewSuccessStatus: action.status,
      };
    }
    default: {
      return state;
    }
  }
};
