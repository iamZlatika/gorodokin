import styled from "@emotion/styled";
import React, { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "../modal-overlay";

interface IModal {
    children: ReactNode,
    onClose: () => void,
}



const Modal: React.FC<IModal> = ({ children, onClose }) => {
    useEffect(() => {
        const handleClose = (e: KeyboardEvent) => {
            e.keyCode === 27 && onClose();
        };
        window.addEventListener("keydown", handleClose);
        return () => {
            window.removeEventListener("keydown", handleClose);
        };
    }, [onClose]);

    return (
        ReactDOM.createPortal(
            <>
                <ModalOverlay onClose={onClose}>
                    <div>

                        {children}
                    </div>
                </ModalOverlay>
            </>,
            document.getElementById("modal-root")!
        )
    );
};

export default Modal;
