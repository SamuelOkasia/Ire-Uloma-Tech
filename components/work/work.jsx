import React from 'react';

import './work.css'

import Image from "next/image";
import Link from "next/link"
import imageFTS from "public/assets/work_finTechSolutions.png";
import imageFF from "public/assets/work_flavourFusion.png";
import imageCC from "public/assets/work_carcustomz.png";

const Work = () => {
    return (
        <div className="work section__padding" id="work">
            <div className="work__container ">
                <div className="work__title">
                    <p className="global__heading">Live Websites</p>
                    <p className="global__text">Preview some of our websites</p>
                </div>
                <div className="work__finTechSolutions">
                    <Link href="https://ire-uloma-tech-fintechsolutions.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Image className="work__finTechSolutions--image"
                               src={imageFTS} alt={"Fin Tech Solutions Website"}
                               unoptimized
                        />
                    </Link>
                </div>
                <div className="work__flavourFusion">
                    <Link href="https://ire-uloma-tech-flavourfusion.netlify.app" target="_blank" rel="noopener noreferrer">
                        <Image className="work__flavourFusion--image"
                               src={imageFF} alt={"Fin Tech Solutions Website"}
                               unoptimized
                        />
                    </Link>
                </div>
                <div className="work__carcustomz">
                    <Link href="https://ire-uloma-tech-carcustomz.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Image className="work__carcustomz--image"
                               src={imageCC} alt={"Fin Tech Solutions Website"}
                               unoptimized
                        />
                    </Link>
                </div>
                <div className="work__message">
                    <p className="global__text">Dive into our work firsthand. Simply select any of the live website previews to explore.</p>
                    <div className="work__message--line"/>
                </div>
            </div>

            {/*For Phones*/}
            <div className="work__containerSD">
                <div className="work__title">
                    <p className="global__heading">Live Websites</p>
                    <p className="global__text">Preview some of our websites</p>
                </div>
                <div className="work__websiteContainer">
                    <div className="">
                        <Link href="https://ire-uloma-tech-fintechsolutions.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Image className="work__finTechSolutions--image"
                                   src={imageFTS} alt={"Fin Tech Solutions Website"}
                                   unoptimized
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://ire-uloma-tech-flavourfusion.netlify.app" target="_blank" rel="noopener noreferrer">
                            <Image className="work__flavourFusion--image"
                                   src={imageFF} alt={"Fin Tech Solutions Website"}
                                   unoptimized
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://ire-uloma-tech-carcustomz.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Image className="work__carcustomz--image"
                                   src={imageCC} alt={"Fin Tech Solutions Website"}
                                   unoptimized
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Work;