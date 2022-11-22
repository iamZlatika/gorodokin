import React from "react";
import styled from "@emotion/styled";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../../services/actions";
import { useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";

interface ICustomInput {
  onClick?: () => void;
}

const Container = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background-color: #fff;
  height: 200px;
  flex-direction: column;
  button {
    margin-bottom: 25px;
  }
  div {
    margin: 40px auto 0 auto;
    width: 70%;
    text-align: center;
  }
`;

const CustomInput: React.FC<ICustomInput> = ({ onClick }) => {
  const language = useSelector((store: any) => store.language);

  return (
    <Container>
      <div>{localiseString("modal:checkInText", language)}</div>
      <Button color="default" label="Ок" onClick={onClick} />
    </Container>
  );
};

export default CustomInput;
