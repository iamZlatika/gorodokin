import { store } from "../../index";
import { ActionsTypes } from "../actions";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = ActionsTypes;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;

export interface ILocalisation {
  langPacks: {
    en: {};
    ru: {};
    ua: {};
  };
}

export interface Size {
  width: number | undefined;
  height: number | undefined;
}
export interface Width {
  width: number | undefined;
  height: number | undefined;
}

export type ReviewInfo = {
  maleSex: boolean;
  femaleSex: boolean;
  name: string;
  age: string;
  review: string;
};

export interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  color: string;
  label: string;
}
