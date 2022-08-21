import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import Arrow from "../../components/arrow";
import Dot from "../../components/dot";
import Line from "../../components/line";
import { certificates } from "../../data/certificates";
import { SET_CERTIFICATE_PROPS, SET_WINDOW_SIZE } from "../../services/actions";
import { useDispatch, useSelector } from "../../services/hooks";
import { localiseString } from "../../services/services";
import NumberLine from "./numberline";

const CertificateWrapper = styled.div`
  width: 90%;
  margin-right: auto;
  height: 800px;
  position: relative;
  display: flex;
  padding-left: 10%;
  flex-direction: column;
  align-items: center;
  .sert-title {
    width: 360px;
    display: flex;
    justify-content: center;

    h2 {
      margin-top: 110px;
      font-size: 32px;
      line-height: 37px;
      color: #1a181b;
      text-align: center;
      font-family: "Tenor Sans", sans-serif;
      font-weight: 400;
    }
  }
  .time_line {
    display: flex;
    margin-top: 230px;
    flex-direction: row;
    overflow: hidden;
    width: 1002px;
    transition: all ease 1s;
    .time-slider {
      display: flex;
      flex-direction: row;
      transition: all ease 1s;
    }
    .cert-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:first-child div:first-child {
        background: linear-gradient(
          90deg,
          rgba(151, 154, 153, 1) 0%,
          rgba(151, 154, 153, 1) 36%,
          rgba(14, 64, 45, 1) 100%,
          rgba(14, 64, 45, 1) 100%
        );
        opacity: 0.3;
      }
      &:last-child div div:nth-child(3) {
        background: linear-gradient(
          90deg,
          rgba(151, 154, 153, 1) 0%,
          rgba(151, 154, 153, 1) 36%,
          rgba(14, 64, 45, 1) 100%,
          rgba(14, 64, 45, 1) 100%
        );
        transform: rotate(180deg);
        opacity: 0.3;
      }
      h4 {
        margin-bottom: 30px;
      }
      .cert-pic {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .cert-text {
        max-width: 250px;
        text-align: center;
        h3 {
          display: none;
        }
      }
    }
  }
  .certificates_nav {
    position: absolute;
    bottom: 120px;
    display: flex;
    width: 100px;
    justify-content: space-between;
    right: 0;
  }
  @media (max-width: 1200px) {
    /* height: auto; */

    .cert-text {
      width: 180px;
    }
    .time_line {
      width: 642px;
    }
  }
  @media (max-width: 820px) {
    height: auto;
    .sert-title {
      justify-content: flex-start;
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
    }

    .time_line {
      width: 100%;
      height: 642px;
      margin-top: 20px;
      margin-bottom: 30px;
      flex-direction: column;
      .time-slider {
        flex-direction: column;
      }
      .cert-item {
        flex-direction: row;
        justify-content: center;

        h4 {
          display: none;
        }
        .cert-pic {
          flex-direction: column;
          &div:nth-child(2n) {
          }
        }
        .cert-text {
          transform: translateY(25px);
          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 10px;
          padding: 16px;
          width: auto;
          text-align: start;
          font-family: "Raleway", sans-serif;
          font-size: 16px;
          line-height: 130%;
          margin-left: 64px;
          h3 {
            font-family: "Tenor Sans", sans-serif;
            font-size: 20px;
            line-height: 23px;
          }
        }
      }
    }
    .certificates_nav {
      position: static;
      margin-bottom: 60px;
      width: 360px;
    }
  }
  @media (max-width: 350px) {
    .time-slider {
      flex-direction: column;
    }
    .sert-title {
      width: auto;
    }
  }
`;

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Certificate = () => {
  const sliderRef = useRef<HTMLDivElement>();
  const dispatch = useDispatch();

  const language = useSelector((store: any) => store.language);
  const offset = useSelector((store: any) => store.certificateProps.offset);
  const screenNumberWidth = useSelector((store: any) => store.certificateProps.screenNumberWidth);
  const mobileNumberWidth = useSelector((store: any) => store.certificateProps.mobileNumberWidth);
  const screenTimeWidth = useSelector((store: any) => store.certificateProps.screenTimeWidth);
  const mobileTimeHeight = useSelector((store: any) => store.certificateProps.mobileTimeHeight);

  const windowSize = useSelector((store: any) => store.windowSize);

  const size: Size = useWindowSize();
  // Hook
  function useWindowSize(): Size {
    useEffect(() => {
      function handleResize() {
        dispatch({
          type: SET_WINDOW_SIZE,
          props: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        });
        dispatch({
          type: SET_CERTIFICATE_PROPS,
          props: { 
            mobileTimeHeight: 0, 
            screenTimeWidth: 0, 
            offset: 0, 
            screenNumberWidth: 0, 
            mobileNumberWidth: 0, 
          },
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

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
        props: {
          mobileTimeHeight: 0,
          screenTimeWidth: screenTimeWidth - sliderStep(size),
          offset: offset - 1,
          screenNumberWidth: screenNumberWidth - 171,
        },
      });
    } else {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        props: {
           mobileTimeHeight: mobileTimeHeight - 214, 
           screenTimeWidth: 0, 
           offset: offset - 1, 
           screenNumberWidth: 0,
           mobileNumberWidth: mobileNumberWidth - 139
           },
      });
    }
  };

  const switchRight = () => {
    if (size.width >= 820) {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        props: {
          mobileTimeHeight: 0,
          screenTimeWidth: screenTimeWidth + sliderStep(size),
          offset: offset + 1,
          screenNumberWidth: screenNumberWidth + 171,
          mobileNumberWidth: 0
        },
      });
    } else {
      dispatch({
        type: SET_CERTIFICATE_PROPS,
        props: { 
          mobileTimeHeight: mobileTimeHeight + 214, 
          screenTimeWidth: 0, 
          offset: offset + 1, 
          screenNumberWidth: 0,
          mobileNumberWidth: mobileNumberWidth + 139 },
      });
    }
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
          {certificates.map(({ text, year }, idx) => (
            <div className="cert-item" key={idx}>
              <h4>{year}</h4>
              <div className="cert-pic">
                <Line />
                <Dot />
                <Line />
              </div>
              <div className="cert-text">
                <h3>{year}</h3>
                <p>{localiseString(text, language)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="certificates_nav">
        <Arrow direction="left" color="dark" className="arrow_left" onClick={switchLeft} disabled={offset <= 0} />
        <Arrow direction="right" color="dark" className="arrow_right" onClick={switchRight} disabled={offset >= 4} />
      </div>
    </CertificateWrapper>
  );
};

export default Certificate;
