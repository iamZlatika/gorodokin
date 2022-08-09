import React, { useState } from 'react'
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./index.css"
import Header from './sections/header'
import Showcase from './sections/showcase'
import Problems from './sections/problems'
import AboutMe from './sections/about-me'
import Certificate from './sections/certificates'
import Footer from './sections/footer'
import CheckIn from './sections/check-in'
import Reviews from './sections/reviews'
import Modal from '../src/components/modal'
import FormReview from './components/form-review'
import { useDispatch } from "react-redux";
import { CLOSE_REVIEW_MODAL } from "./services/actions"
import { useSelector } from './services/hooks'
import { Location } from "history"
import CustomInput from './components/custom-input';



const App: React.FC = () => {
    const history = useHistory();
    const location = useLocation<{ background?: Location }>();
    const background = history?.action === "PUSH" && location?.state?.background;
    

    const dispatch = useDispatch();
    const reviewStatus = useSelector((store) => store.reviewStatus)
    const [isReviewOpen, setModalOpen] = useState<boolean>(true);

    return (
        <>
            <Switch location={background || location}>
                <Route path="/" exact>
                    <Header />
                    <Showcase />
                    <AboutMe />
                    <Problems />
                    <Certificate />
                    <Reviews />
                    {reviewStatus &&
                        <Modal onClose={() => dispatch({ type: CLOSE_REVIEW_MODAL })}>
                            <FormReview onClose={() => setModalOpen(false)} />
                        </Modal>}
                    <CheckIn />
                    <Footer />
                </Route>
            </Switch>
            <Route
                path="/confirm-check-in"
                children={
                    background && (
                        <Modal
                            onClose={() => {
                                history.goBack();
                            }}
                        >
                            <CustomInput />
                        </Modal>
                    )
                }
            />
        </>
    )
}

export default App
