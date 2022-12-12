import styled from "@emotion/styled";
import { ButtonProps } from "../../services/types";

export const ButtonWrapper = styled.button<Pick<ButtonProps, "color">>`
  background: ${(props) => (props.color === "default" ? "#FF8427" : "#fff")};
  color: ${(props) => (props.color === "default" ? "#fff" : "#FF8427")};
  border: #ff8427 1px solid;
  padding: 14px 45px;
  font-size: 1rem;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  width: 258px;
  border-radius: 75px;
  outline: none;

  &:hover {
    background: ${(props) => (props.color === "default" ? "#fff" : "#FF8427")};
    color: ${(props) => (props.color === "default" ? "#FF8427" : "#fff")};
    border: #ff8427 1px solid;
  }
`;
