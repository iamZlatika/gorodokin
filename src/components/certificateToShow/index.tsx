import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "../../services/hooks";
import { certificates } from "../../data/certificates";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CLOSE_CERTIFICATE_MODAL } from "../../services/actions";

interface ICertificateToShow {
  position?: string;
}
const CertificateWrapper = styled.div<ICertificateToShow>`
  /* position: absolute; */
  max-width: ${(props) => (props.position === "vertical" ? "40%" : "80%")};
  max-height: ${(props) => (props.position === "vertical" ? "80%" : "40%")};
  position: relative;
  margin: 0 auto;
  padding: 0;
  z-index: 20;
  border-radius: 44px 0px 0px 0px;

  top: ${(props) => (props.position === "vertical" ? "-10%" : "-30%")};
  font-family: "Raleway", sans-serif;
  display: flex;
  .icon {
    position: absolute;
    right: 0;
  }
  img {
    border-radius: 44px 0px 0px 0px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    max-width: ${(props) => (props.position === "vertical" ? "60%" : "80%")};
    max-height: ${(props) => (props.position === "vertical" ? "80%" : "40%")};
    top: ${(props) => (props.position === "vertical" ? "-10%" : "-20%")};
  }
  @media (max-width: 800px) {
    max-width: 100%;
    max-height: ${(props) => (props.position === "vertical" ? "80%" : "40%")};
    top: ${(props) => (props.position === "vertical" ? "-10%" : "-20%")};
  }
`;

const СertificateToShow: React.FC<ICertificateToShow> = () => {
  const dispatch = useDispatch();
  const curentCertificate = useSelector((store) => store.certificateToShow);
  return (
    <>
      {
        <CertificateWrapper
          position={certificates.find((certificate) => certificate.text === curentCertificate).position}
        >
          <img
            src={certificates.find((certificate) => certificate.text === curentCertificate).image}
            alt="certificate"
          />
          <div className="icon" onClick={() => dispatch({ type: CLOSE_CERTIFICATE_MODAL })}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </CertificateWrapper>
      }
    </>
  );
};

export default СertificateToShow;
