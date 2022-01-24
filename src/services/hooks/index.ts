import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";
  import { AppThunk, RootState, AppDispatch } from "../types";
  
  export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
  
  export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
  