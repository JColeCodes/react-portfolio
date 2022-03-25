import React from 'react';

function Contact({ title }) {
    const socials = [
        { url: "https://www.linkedin.com/in/jennifer-cole-a9506b163/", icon: "fa-linkedin", title: "LinkedIn" },
        { url: "https://github.com/JColeCodes", icon: "fa-github", title: "GitHub" },
        { url: "https://www.instagram.com/capauldi/", icon: "fa-instagram", title: "Instagram (Personal)" },
        { url: "https://discord.com/users/354098549761507332", icon: "fa-discord", title: "Discord (Personal)" }
    ];
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
                <input type="text" name="name" />

                <label htmlFor="email">Email: <span className="required">*</span></label>
                <input type="email" name="email" />

                <label htmlFor="subject">Subject: <span className="required">*</span></label>
                <input type="text" name="subject" />

                <label htmlFor="message">Message: <span className="required">*</span></label>
                <textarea name="message" rows="5"></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;