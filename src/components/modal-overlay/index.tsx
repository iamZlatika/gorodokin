
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface IModal {
  children: ReactNode,
  onClose: (e?: React.KeyboardEvent | React.MouseEvent<HTMLElement>) => void,
}


const ModalOverlayrapper = styled.div`
display: flex;
background-color: rgba(0, 0, 0, 0.6);
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
`

const ModalOverlay: React.FC<IModal> = ({ children, onClose }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const onOverlayClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <ModalOverlayrapper
      onClick={(e) => onOverlayClose(e)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </ModalOverlayrapper>
  );
};

export default ModalOverlay;
