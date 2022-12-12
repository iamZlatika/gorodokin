import React, { useRef, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./sections/header";
import Showcase from "./sections/showcase";
import Problems from "./sections/problems";
import AboutMe from "./sections/about-me";
import ShowImage from "./sections/certificates";
import Footer from "./sections/footer";
import CheckIn from "./sections/check-in";
import Reviews from "./sections/reviews";
import Modal from "../src/components/modal";
import FormReview from "./components/form-review";
import СertificateToShow from "./components/certificateToShow";
import { useDispatch } from "react-redux";
import { CLOSE_REVIEW_MODAL, CLOSE_CERTIFICATE_MODAL } from "./services/actions";
import { useSelector } from "./services/hooks";
import { Location } from "history";
import CustomInput from "./components/custom-input";
import ModalSuccess from "./components/modal-success";

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ background?: Location }>();
  const background = history?.action === "PUSH" && location?.state?.background;

  const dispatch = useDispatch();
  const reviewStatus = useSelector((store) => store.reviewStatus);
  const certificatesStatus = useSelector((store) => store.certificatesStatus);
  const reviewSuccessStatus = useSelector((store) => store.reviewSuccessStatus);
  const confirmCheckIn = () => history.goBack()


  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact>
          <Header />
          <Showcase/>
          <AboutMe />
          <Problems />
          <ShowImage />
          {certificatesStatus && (
            <Modal onClose={() => dispatch({ type: CLOSE_CERTIFICATE_MODAL })}>
              <СertificateToShow />
            </Modal>
          )}
          <Reviews />
          {reviewStatus && (
            <Modal onClose={() => dispatch({ type: CLOSE_REVIEW_MODAL })}>
              <FormReview />
            </Modal>
          )}
          <CheckIn/>
          <Footer />
        </Route>
      </Switch>
      <Route
        path="/confirm-check-in"
        children={
          background && (
            <Modal
              onClose={confirmCheckIn}
            >
              <CustomInput onClick={confirmCheckIn} />
            </Modal>
          )
        }
      />
      <Route
        path="/successfully-send"
        children={
          background && (
            <Modal
              onClose={confirmCheckIn}
            >
              <ModalSuccess />
            </Modal>
          )
        }
      />
    </>
  );
};

export default App;
