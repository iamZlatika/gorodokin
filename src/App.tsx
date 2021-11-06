import React from 'react'
import "./index.css"
import Header from './components/header'
import Showcase from './components/showcase'
import  SocialNetItems from './components/showcase/social-net-items'
import Problems from './components/problems'
import AboutMe from './components/about-me'


const App = () => {
    return (
        <div>
            <Header />
            <Showcase />
            <SocialNetItems />
            <AboutMe />
            <Problems />
            HELLO ANTON
        </div>
    )
}

export default App
