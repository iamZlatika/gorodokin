import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../buttons/Button";
import { CheckInFormStyled } from "./style";
import { localiseString } from "../../services/services";
import { useSelector } from "../../services/hooks";

const ModalSuccess: React.FC = () => {
  const history = useHistory();
  const closeModal = () => history.goBack();
  const language = useSelector((store: any) => store.language);
  return (
    <CheckInFormStyled>
      <div>{localiseString("modal:reviewSuccess", language)}</div>
      <Button color="default" label="Ок" onClick={closeModal} />
    </CheckInFormStyled>
  );
};

export default ModalSuccess;
