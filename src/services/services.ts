import { useSelector } from "../services/hooks";



export const localiseString = (key: string, language: string) => {
  const localisation = useSelector((state: any) => state.localisation)
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


