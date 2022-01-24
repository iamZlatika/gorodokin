import React from 'react'
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


const App = () => {
    return (
        <div>
            <Header />
            <Showcase />
            <AboutMe />
            <Problems />
            <Certificate />
            <Reviews />
            <CheckIn />
            <Footer />
        </div>
    )
}

export default App
