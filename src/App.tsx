import React, { useState } from 'react'
import "./index.css"
import Header from './sections/header'
import Showcase from './sections/showcase'
import SocialNetItems from './components/social-nets'
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


const App = () => {

    const dispatch = useDispatch();
    const reviewStatus = useSelector((store) => store.reviewStatus)
    const [isReviewOpen, setModalOpen] = useState<boolean>(true);
    return (
        <div>
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

        </div >
    )
}

export default App
