'use client'

import React from 'react';

import './header.css'

import Image from "next/image";
import headerImage from "public/assets/header_image.png";
import headerContact from "public/assets/header_contact.png"

const Header = () => {
    return (
        <div className="header section__padding">
            <div className="header__content">
                <p className="header__content--slogan">We are a <span className="header__highlight">Creative</span> <br/> Digital Agency.</p>
                <div className="header__lineBreak"><br/></div>
                <p className="header__content--message">
                    Transforming your digital presence into a powerful tool to grow your business is our mission.
                </p>
                <div className="header__content__contact">
                    <p className="header__content__contact--label">Contact</p>
                    <div/>
                    <Image src={headerContact} alt="Contact Us Image" width={30}/>
                    <p className="header__content__contact--email">contact@ireulomatech.com</p>
                </div>
            </div>
            <div className="header__image">
                <Image src={headerImage} alt="Header Image" height={450}/>
            </div>
        </div>
    );
};

export default Header;