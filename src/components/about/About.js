import React from 'react'
import Carousel from './Carousel'
import "./About.css"
const About = () => {
    return (
        <div className='about' id="about">
            <Carousel />
            <div className="text__container">
                <h1>Welcome to the IcApes Club.</h1>
                <h3>We paved a cyber highway to IcApes and create a brand-new colony gated exclusively for the IcApes fans!</h3>
                <p>The king is sweeping the world with a collection of 10,000 IcApes NFTs.
                    Each of these 3D PFP-styled IcApes NFTs is uniquely and algorithmically
                    generated, each revealing The King's one-of-a-kind expression and attitude.
                    <br />

                </p>
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Connect Wallet</span>
                </button>
            </div>
        </div>
    )
}

export default About