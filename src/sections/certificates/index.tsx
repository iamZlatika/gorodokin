import React, { useEffect, useRef } from "react";
import Arrow from "../../components/arrow";
import Dot from "../../components/dot";
import Line from "../../components/line";
import { certificates } from "../../data/certificates";
import { SET_CERTIFICATE_PROPS, SET_WINDOW_SIZE, OPEN_CERTIFICATE_MODAL } from "../../services/actions";
import { useDispatch, useSelector } from "../../services/hooks";
import { localiseString, useWindowSize } from "../../services/services";
import { Size } from "../../services/types";
import NumberLine from "./numberline";
import { CertificateWrapper } from "./style";

const ShowImage = () => {
  const sliderRef = useRef<HTMLDivElement>();
  const dispatch = useDispatch();

  const language = useSelector((store: any) => store.language);

  const offset = useSelector((store: any) => store?.certificateProps.offset);
  const screenNumberWidth = useSelector((store: any) => store.certificateProps.screenNumberWidth);
  const mobileNumberWidth = useSelector((store: any) => store.certificateProps.mobileNumberWidth);
  const screenTimeWidth = useSelector((store: any) => store.certificateProps.screenTimeWidth);
  const mobileTimeHeight = useSelector((store: any) => store.certificateProps.mobileTimeHeight);

  const windowSize = useSelector((store: any) => store.windowSize);

  useEffect(() => {
    dispatch({
      type: SET_CERTIFICATE_PROPS,
      certificateProps: {
        mobileTimeHeight: 0,
        screenTimeWidth: 0,
        offset: 0,
        screenNumberWidth: 0,
        mobileNumberWidth: 0,
      },
    });
  }, [windowSize]);

  const size: Size = useWindowSize();
  
  const sliderStep = (size: Size) => {
    if (size.width >= 1200) {
      return 334;
    }
    if (size.width >= 820 && size.width < 1200) {
      return 214;
    }
  };

  const switchLeft = () => {
    if (size.width >= 820) {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        certificateProps: {
          mobileTimeHeight: 0,
          screenTimeWidth: screenTimeWidth - sliderStep(size),
          offset: offset - 1,
          screenNumberWidth: screenNumberWidth - 171,
        },
      });
    } else {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        certificateProps: {
          mobileTimeHeight: mobileTimeHeight - 214,
          screenTimeWidth: 0,
          offset: offset - 1,
          screenNumberWidth: 0,
          mobileNumberWidth: mobileNumberWidth - 139,
        },
      });
    }
  };

  const switchRight = () => {
    if (size.width >= 820) {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        certificateProps: {
          mobileTimeHeight: 0,
          screenTimeWidth: screenTimeWidth + sliderStep(size),
          offset: offset + 1,
          screenNumberWidth: screenNumberWidth + 171,
          mobileNumberWidth: 0,
        },
      });
    } else {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        certificateProps: {
          mobileTimeHeight: mobileTimeHeight + 214,
          screenTimeWidth: 0,
          offset: offset + 1,
          screenNumberWidth: 0,
          mobileNumberWidth: mobileNumberWidth + 139,
        },
      });
    }
  };

  const onClick = (text: string) => {
    dispatch({ type: OPEN_CERTIFICATE_MODAL, id: text });
  };

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${screenTimeWidth}px)`;
  }, [offset]);
  useEffect(() => {
    sliderRef.current.style.transform = `translateY(-${mobileTimeHeight}px)`;
  }, [mobileTimeHeight]);
  return (
    <CertificateWrapper id="certificates">
      <div className="sert-title">
        <h2>{localiseString("interface:certificates", language)}</h2>
      </div>
      <NumberLine />
      <div className="time_line">
        <div ref={sliderRef} className="time-slider">
          {certificates.map(({ text, year, image }, idx) => (
            <div className="cert-item" key={idx}>
              <img className="cert-image" src={image} alt={`${year}`} onClick={() => onClick(text)} />
              <h4>{year}</h4>
              <div className="cert-pic">
                <Line />
                <Dot />
                <Line />
              </div>
              <div className="cert-text" onClick={() => onClick(text)}>
                <h3>{year}</h3>
                <p>{localiseString(text, language)}</p>
                <span className="cert-action">{localiseString("interface:showCertificate", language)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="certificates_nav">
        <Arrow direction="left" color="dark" className="arrow_left" onClick={switchLeft} disabled={offset <= 0} />
        <Arrow direction="right" color="dark" className="arrow_right" onClick={switchRight} disabled={offset >= 5} />
      </div>
    </CertificateWrapper>
  );
};

export default ShowImage;
