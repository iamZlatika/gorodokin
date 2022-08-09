import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { SET_LANGUAGE } from "../../../services/actions";
import { useSelector } from "../../../services/hooks";

const LocalazerWrapper = styled.div`
  display: flex;
`;
const LocalizerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 3px 12px;
  cursor: pointer;

  & + button {
    border-left: 1px solid #c4c4c4;
  }
  &.selected {
    font-weight: 900;
    color: #ff8427;
  }
`;

const Localazer: React.FC = () => {
  const language = useSelector((store: any) => store.language);
  const dispatch = useDispatch();

  const languages = [
    { code: "ua", label: "Укр" },
    { code: "en", label: "Eng" },
    { code: "ru", label: "Рус" },
  ];

  const ChangeLanguage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    localStorage.setItem("language", JSON.stringify(e.currentTarget.getAttribute("data-name")));
    dispatch({ type: SET_LANGUAGE, language: e.currentTarget.getAttribute("data-name") });
  };

  useEffect(() => {
    const language = JSON.parse(localStorage.getItem("language"));
    if (language) {
      dispatch({ type: SET_LANGUAGE, language: language });
    }
  }, []);

  return (
    <LocalazerWrapper>
      {languages.map(({ code, label }) => (
        <LocalizerButton
          onClick={(e) => ChangeLanguage(e)}
          key={code}
          data-name={code}
          className={code === language && "selected"}
        >
          {label}
        </LocalizerButton>
      ))}
    </LocalazerWrapper>
  );
};

export default Localazer;
