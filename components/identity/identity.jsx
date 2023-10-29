'use client'
import React, { useState, useEffect } from 'react';

import Image from "next/image";

import "./identity.css"

import headerImage from "public/assets/indentity_headerImage.png";
import missionImage from "public/assets/identity_mission.svg";
import visionImage from "public/assets/identity_vision.svg";
import valuesImage from "public/assets/identity_values.svg";

import showImage from "public/assets/identity_show.svg";
import hideImage from "public/assets/identity_hide.svg";

function ReusableDiv({title, message}) {

    const [isVisible, setIsVisible] = useState(true);
    /*Depending on if we are on phone or desktop/laptop/ipad, we want it to be hidden on phones initially*/
    /*Normally true would be window.innerWidth > 700, but we get an error saying window is not defined and its becuase:
        The error you're seeing (window is not defined) is most likely because you are using server-side rendering (SSR), ' +
    'or a static site generator like Next.js or Gatsby. The window object is specific to the browser and doesn't exist on the
    server-side.To ge*/

    useEffect(() => {
        // Set the state based on window width only on the client side
        setIsVisible(window.innerWidth > 700);
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <span className="global__subHeading reusable__span" style={{cursor: 'pointer'}} onClick={toggleVisibility}>
                {title} {
                        isVisible ?
                            <div className="hideShowDiv">
                                <Image className="hideShowImage" src={hideImage} alt="Hide message"/>
                            </div>
                            :
                            <div className="hideShowDiv">
                                <Image className="hideShowImage" src={showImage} alt="Show message"/>
                            </div>
                        }
            </span>
            {isVisible && <p className="global__text">{message}</p>}
        </div>
    );
}
const Identity = () => {

    return (
        <div className="identity section__padding" id="identity">
            <div className="identity__title">
                <p className="global__heading">Identity</p>
                <p className="global__text">Understand who we are</p>
            </div>
            <div className="identity__header">
                <div className="identity__header__image">
                    <Image className="identity__header__image--image" src={headerImage} alt={"Identity Header Image"}/>
                </div>
                <div className="identity__header__text">
                    <p className="global__subHeading">
                        Responsive & Future-Proof Web Design
                    </p>
                    <p className="global__text">At Ire - Uloma Tech, we tailor your site for the multi-device world.</p>
                    <ul className="global__text global__textPadding">
                        <li>Multi-platform design: Desktop, tablet, mobile.</li>
                        <li>Rigorous testing for flawless performance.</li>
                        <li>Seamless, user-friendly experience.</li>
                        <li>Future-proof, adaptable solutions.</li>
                    </ul>
                </div>
            </div>
            <div className="identity__mission">
                <Image className="identity__mission--Image" src={missionImage} alt="Mission image"/>
                <ReusableDiv title="Mission"
                             message="We are on a mission to bridge the digital divide, helping businesses of all sizes establish a
                        formidable online presence through innovative, user-centric website design. Whether we're
                        shaping the future of digital interactions with high-quality, personalized designs, or
                        bringing a client's vision to life, our goal remains the same - to create impactful websites
                        that resonate with audiences and drive businesses forward."

                />
            </div>

            <div className="identity__vision">
                <Image className="identity__vision--Image" src={visionImage} alt="Vision image"/>
                <ReusableDiv title="Vision"
                             message="Envisioning a world where every business, irrespective of its
                        size or industry, can make a lasting digital impression, we see ourselves as architects
                        of this digital future. By redefining the boundaries of web design, we aim to continually
                        push the envelope of creativity and functionality. Our ambition is to be the trusted
                        partner for businesses seeking to navigate and excel in the digital world, and in doing
                        so, set new standards that contribute to a vibrant and accessible digital ecosystem."
                />
            </div>
            <div className="identity__values">
                <Image className="identity__values--Image" src={valuesImage} alt="Values image"/>
                <ReusableDiv title="Values"
                             message="At the heart of our agency lie our core values - Creativity, Collaboration,
                        Commitment, Integrity, and Excellence. They define who we are and guide our work. But they also resonate
                        in our ethos of Innovation, Transparency, Respect, and Quality, as well as in our commitment to our
                        clients. These values aren't just words to us; they're woven into the fabric of our agency, shaping our
                        actions, our aspirations, and the way we interact with the world around us."
                />
            </div>
        </div>
    );
};

export default Identity;