'use client'

import { useState } from 'react';

import "./contact-us.css"

import Image from "next/image";

import contactUsImage from "public/assets/contact-us_image.png";

const Page = () => {

    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        // Logging the formData to the console (you already have this part)
        console.log(formData);

        // Send the formData to the backend
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Handle the response from the backend
            if (response.ok) {
                const result = await response.json();
                if (result.status === 'OK') {
                    alert('Email sent successfully!');
                } else {
                    alert('There was a problem sending the email.');
                }
            } else {
                alert('There was an error connecting to the server.');
            }
        } catch (error) {
            console.error('There was an error sending the form data:', error);
            alert('There was an error sending the form data.');
        }
    }


    async function sendEmail() {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify('hello'),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }

    return (
        <div className="contactUs section__padding">
            <div className="contactUs__content">
                <p className="global__subHeading">Reach Out To Us</p>
                <p className="global__text contactUs__textSize">We aim to respond to all inquiries within 24 hours</p>

                <form className="contactUs__form" onSubmit={handleSubmit}>
                        <input
                            className="global__text"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="global__text"
                            type="text"
                            id="companyName"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                        />

                        <input
                            className="global__text"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            className="global__text"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            placeholder="Message (Optional)"
                            onChange={handleChange}

                        ></textarea>
                        <label className="global__text">Unsure about what to write in your message?</label>
                        <p className="global__text contactUs__textSize">Just leave your details and hit 'Submit'. We'll guide you through the rest. Your digital journey with Ire Uloma Tech starts here.</p>

                    <button className="global__text contactUs__textSize" type="submit">Submit</button>
                </form>

            </div>
            <div className="contactUs__image">
                <Image className="cotasctUs__image--image" src={contactUsImage} alt={"Contact Us Image"}/>
            </div>
        </div>
    );
};

export default Page;