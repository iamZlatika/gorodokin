import React, { useState } from 'react'
import "./index.css"
import Header from './sections/header'
import Showcase from './sections/showcase'
import SocialNetItems from './components/social-nets'
import Problems from './sections/problems'
import AboutMe from './sections/about-me'
import Certificate from './sections/certificates'
import Footer from './sections/footer'
import CheckIn from './sections/check-in/CheckIn'
import Reviews from './sections/reviews'
import Modal from '../src/components/modal'
import FormReview from './components/form-review'


const App = () => {
    const [isReviewOpen, setModalOpen] = useState<boolean>(true);
    return (
        <div>
            <Header />
            <Showcase />
            <SocialNetItems color="dark" />
            <AboutMe />
            <Problems />
            <Certificate />
            <Reviews />
            {isReviewOpen &&
                <Modal onClose={() => setModalOpen(false)}>
                    <FormReview />
                </Modal>}
            <CheckIn />
            <Footer />

        </div>
    )
}

export default App
