import { useEffect } from "react";
import { useSelector,useDispatch } from "../services/hooks";
import { SET_CERTIFICATE_PROPS, SET_WINDOW_SIZE } from "./actions";
import { Size } from "./types";


export const localiseString = (key: string, language: string) => {
  const localisation = useSelector((state: any) => state.localisation);
  if (key === undefined) return "";

  if (localisation === undefined) {
    console.log("store not exist");
    return;
  }

  if (!localisation.langPacks || localisation.langPacks.length < 1) return;
  const lang = language || Object.keys(localisation.langPacks)[0];
  if (lang === undefined) return;
  var result = localisation.langPacks[lang][key];
  if (result === undefined) return key;
  return result;
};

export function useWindowSize(): Size {
  const windowSize = useSelector((store: any) => store.windowSize);
  const dispatch = useDispatch()
  useEffect(() => {
    function handleResize() {
      dispatch({
        type: SET_WINDOW_SIZE,
        windowSizeProps: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

