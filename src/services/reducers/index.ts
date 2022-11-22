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
} from "../actions";
import { ActionsTypes } from "../actions";
import { dictionary } from "../../data/localisation";
import { ILocalisation } from "../types";

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
    dateValue: Date | null;
  };
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
  reviewProps: {
    screenWidth: number;
    mobileWidth: number;
    offset: number;
  };
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
    dateValue: null,
  },
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
  reviewProps: {
    screenWidth: 0,
    mobileWidth: 10,
    offset: 0,
  },
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
          dateValue: action.date,
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
      };
    }
    case SET_WINDOW_SIZE: {
      return {
        ...state,
        windowSize: action.windowSizeProps,
      };
    }
    default: {
      return state;
    }
  }
};
