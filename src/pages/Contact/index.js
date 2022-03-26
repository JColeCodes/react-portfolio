import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact({ title }) {
    const socials = [
        { url: "https://www.linkedin.com/in/jennifer-cole-a9506b163/", icon: "fa-linkedin", title: "LinkedIn" },
        { url: "https://github.com/JColeCodes", icon: "fa-github", title: "GitHub" },
        { url: "https://www.instagram.com/capauldi/", icon: "fa-instagram", title: "Instagram (Personal)" },
        { url: "https://discord.com/users/354098549761507332", icon: "fa-discord", title: "Discord (Personal)" }
    ];
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, subject, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }

    function dynamicTextbox(e) {
        const textarea = e.target;
        const textHeight = 124;
        textarea.style.height = textHeight + "px";
        if (textarea.scrollHeight > textHeight) {
            textarea.style.height = textarea.scrollHeight + 4 + "px";
        }
    }

    return(
        <section id="contact">
            <h3>{title}</h3>
            <ul>
                {socials.map(({ url, icon, title }) => (
                    <li key={icon}><a href={url} target="_blank" rel="noreferrer"><i className={`fa-brands ${icon}`}></i> {title}</a></li>
                ))}
            </ul>
            <p>Above are some of my social media contacts, however, the best way to contact me is via email! You can send me a message through the form below. If things aren't working, you can send me an email directly at <a href="mailto:contact@colecodes.com">contact@colecodes.com</a>.</p>
            <form id="contact-form" className="contact-form">
                <label htmlFor="name">Name: <span className="required">*</span></label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />

                <label htmlFor="email">Email: <span className="required">*</span></label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />

                <label htmlFor="subject">Subject: <span className="required">*</span></label>
                <input type="text" name="subject" defaultValue={subject} onBlur={handleChange} />

                <label htmlFor="message">Message: <span className="required">*</span></label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} onChange={dynamicTextbox}></textarea>

                {errorMessage && <p className="required error">{errorMessage}</p>}

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;