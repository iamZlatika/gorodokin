import React from "react";
import { psychoProblems } from "../../../data/problems";
import { useSelector } from "../../../services/hooks";
import { localiseString } from "../../../services/services";
import ProblemItem from "../problem-item";
import { ProblemsListWrapper } from "./style";

const ProblemsList: React.FC = () => {
  const language = useSelector((store: any) => store.language);

  return (
    <ProblemsListWrapper>
      {psychoProblems.map(({ name, title, helpSteps }) => (
        <div key={name} className="list-wrapper">
          <h3>{localiseString(title, language)}</h3>
          <ul>
            {helpSteps.map((step, i) => (
              <ProblemItem key={i} step={localiseString(step, language)} />
            ))}
          </ul>
        </div>
      ))}
    </ProblemsListWrapper>
  );
};

export default ProblemsList;
