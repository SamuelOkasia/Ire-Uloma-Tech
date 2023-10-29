//Image by <a href="https://www.freepik.com/free-photo/colorful-powder-mix-splash_24239333.htm#query=paint%20explosion&position=28&from_view=keyword&track=ais">Freepik</a>
//remeber to credit author

import React from 'react';

import "./footer.css"

import Image from "next/image";

import logoImage from "public/assets/logo.jpg"

const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer--line"/>
            <p className="global__textBold footer65">Your online presence deserves the best. <br/>Let's create it together.</p>
            <p className="global__textBold">contact@ireulomatech.com</p>
            <p className="global__textBold footer65">Get In Touch <span className="footer--highlight">Now</span></p>
            <ul>
                <li className="header__text">Services</li>
                <li className="header__text">Work</li>
                <li className="header__text">Identity</li>
                <li className="header__text">Get In Touch</li>
            </ul>
            <div className="footer__copyright">
                <div className="footer__logo">
                    <Image  className="footer__logo--image" src={logoImage} alt={"Logo Image"}/>
                </div>
                <h3 className="header__text">Copyright © 2023 Ire-Uloma Tech and All Rights Reserved</h3>
            </div>
        </div>
    );
};

export default Footer;