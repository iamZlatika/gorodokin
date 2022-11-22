import React, { useEffect, useRef } from "react";
import { certificates } from "../../../data/certificates";
import { useSelector } from "../../../services/hooks";
import { NumberLineStyled } from "./style";

const NumberLine = () => {
  const numRef = useRef<HTMLDivElement>();
  const offset = useSelector((store: any) => store.certificateProps.offset);
  const screenNumberWidth = useSelector((store: any) => store.certificateProps.screenNumberWidth);
  const mobileNumberWidth = useSelector((store: any) => store.certificateProps.mobileNumberWidth);

  useEffect(() => {
    numRef.current.style.transform = `translateY(-${screenNumberWidth}px)`;
  }, [offset]);
  useEffect(() => {
    numRef.current.style.transform = `translateX(-${mobileNumberWidth}px)`;
  }, [mobileNumberWidth]);

  return (
    <NumberLineStyled>
      <div className="number-slider" ref={numRef}>
        {certificates.map((cert, idx) => (
          <div className="side-line" key={idx}>
            <div className="side-line_title">
              <div className="side-dot" />
              <span>{idx + 1}</span>
            </div>
            <div className="line"></div>
          </div>
        ))}
      </div>
    </NumberLineStyled>
  );
};

export default NumberLine;
