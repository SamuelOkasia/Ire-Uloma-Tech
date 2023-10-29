import React from 'react';

import './services.css'
import Image from "next/image";

import webDevIcon from "public/assets/services_icon_webdesign.svg";
import uiUxIcon from "public/assets/services_icon_uiux.svg";
import seoIcon from "public/assets/services_icon_seo.svg";

function ReusableDiv({icon, name, message}) {
    return (
        <div className="services__content__service">
            <div className="services__content__service__image">
                <Image src={icon} alt={""} width={160}/>
            </div>
            <p className="services__content__service--title">{name}</p>
            <p className="services__content__service--message">{message}</p>
            <div className="services__content__service--line"/>
        </div>
    );
}
const Services = () => {
    return (
        <div className="services section__padding">
            <p className="services--title">What We  <span className="services--highlight">Do</span></p>
            <div className="services__content">
                <ReusableDiv
                    icon={webDevIcon} name="Website Development"
                    message="This involves designing and developing websites from scratch, or redesigning existing websites."
                />
                <ReusableDiv
                    icon={uiUxIcon} name="UI UX Design"
                    message="This involves designing and developing websites from scratch, or redesigning existing websites."
                />
                <ReusableDiv
                    icon={seoIcon} name="SEO Marketing"
                    message="This involves designing and developing websites from scratch, or redesigning existing websites."
                />
            </div>
        </div>
    );
};

export default Services;