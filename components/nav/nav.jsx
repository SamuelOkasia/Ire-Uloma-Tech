'use client'

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Link from "next/link";
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";

import './nav.css'

import Image from "next/image";

import logoImage from "public/assets/logo.jpg"
function scrollToElement({id,offset}) {


    const element = document.getElementById(id);
    // The height of the fixed div (adjust this if your fixed div's height changes)
    const offsetHeight = offset;
    // Calculate the top position of the element and subtract the fixed div's height
    const yOffset = element.getBoundingClientRect().top + window.pageYOffset - offsetHeight;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
}


const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navPhoneContainerRef = useRef(null);


    // Check if the current page is not the "contact" page
 /*   const Menu = () => (
        <>
            { isHomePage &&
                <>
                    <p><button onClick={() => scrollToElement({id: 'work', offset:0})}>Work</button></p>
                    <p><button onClick={() => scrollToElement({id: 'identity', offset:0})}>Identity</button></p>
                </>
            }

            { !isHomePage &&
                <>
                    <p><button onClick={() => { router.push('./'); scrollToElement({id: 'work', offset:0})}}>Work</button></p>
                    <p><button onClick={() => scrollToElement({id: 'identity', offset:80})}>Identity</button></p>
                </>
            }
            <Link href="/contact-us"><button>Get In Touch</button></Link>

            /!*    <button onClick={() => scrollToElement({id: 'work', offset:80})}>Work</button>
            <button onClick={() => scrollToElement({id: 'identity', offset:80})}>Identity</button>
            <Link href="/contact-us"><button>Get In Touch</button></Link>*!/}
        </>
    )*/

    const Menu = () => (
        <>
            <p><a href='/#work'>Work</a></p>
            <p><a href='/#identity'>Identity</a></p>
            <p><a href='/contact-us'>Get In Touch</a></p>
        </>
    )

    useEffect(() => {
        if (toggleMenu && navPhoneContainerRef.current) {
            const handleMenuClick = () => {
                setToggleMenu(false);
            };

            navPhoneContainerRef.current.addEventListener('click', handleMenuClick);

            // Cleanup
            return () => {
                if (navPhoneContainerRef.current) {
                    navPhoneContainerRef.current.removeEventListener('click', handleMenuClick);
                }
            };
        }
    }, [toggleMenu]);

    return (
        <div className="container__nav">
                    <div className="nav">
                        <div className="nav__container">
                            <div className="nav__container__links">
                                <div className="nav__container__links__logo">
                                    <Link className="htag" href={"./"}>
                                        <Image className="nav__container__links__logo-image" src={logoImage} alt={"Logo"}/>
                                    </Link>
                                </div>
                                <div className="nav__container__links__menu">
                                    <Menu/>
                                </div>
                            </div>
                            <div className="nav__menu">
                                {toggleMenu ? <RiCloseLine color="#ffffff" size={27} onClick={() => setToggleMenu(false)}/>
                                    : <RiMenu3Line color='#ffffff' size={27} onClick={() => setToggleMenu(true)}/>
                                }
                            </div>
                        </div>
                        {toggleMenu && (
                            <div className="nav__phoneContainer" ref={navPhoneContainerRef}>
                                <Menu/>
                            </div>
                        )}
                    </div>
                </div>

    );
};

export default Nav;