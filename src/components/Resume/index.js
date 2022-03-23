import React from 'react';
import leafImg from '../../assets/images/leaf-beige.png';

function Resume({ title }) {
    const sections = ["skills", "education", "experience"];
    const skills = [
        {
            title: "Frontend Development",
            specifics: [ "HTML5", "CSS3", "JavaScript", "DOM", "Wordpress", "Bootstrap", "Handlebars" ],
        }, {
            title: "Backend Development",
            specifics: [ "REST APIs", "MySQL", "MVC", "MERN" ]
        }, {
            title: "MERN Stack",
            specifics: [ "MongoDB", "Express.js", "React.js", "Node.js", "Apollo", "GraphQL" ]
        }, {
            title: "Site Maintenance",
            specifics: [ "cPanel", "FTP" ]
        }, {
            title: "UI / UX Design",
            specifics: [ "Typography" ]
        }, {
            title: "Graphic Design",
            specifics: [ "Adobe Photoshop", "Adobe Illustrator" ]
        }, {
            title: "Other Resources",
            specifics: [ "Adobe Animate", "Python", "Java", "XCode", "Git" ]
        }
    ]
    const education = [
        {
            years: "2021-2022",
            school: "UC Berkeley Extension",
            description: "soon",
            certification: "Certificate"
        }, {
            years: "2015-2020",
            school: "West Valley College",
            description: "Some classes include: Visual Design for New Media, Portfolio Planning, Internet Marketing, Mobile Marketing, Adobe Animate, Python Programming",
            certification: "A.A. Degree"
        }
    ];
    const experience = [
        {
            years: "2017-2020",
            role: "Digital Media TA at West Valley College",
            description: "Student assistant for the digital media department at West Valley College. Tasks have included: re-coding the digital media website and creating promotional flyers about classes offered."
        }, {
            years: "2005-Present",
            role: "Self Study & Practice",
            description: "Started learning HTML and CSS during Summer 2005. Started learning Adobe Photoshop late Dec. 2007.",
            notes: "Many years of freelance work."
        }
    ];

    return(
        <section>
            <h3>{title}</h3>
            <div className="resume">
                <ul className="sidebar">
                    {sections.map(sect => (
                        <li key={sect}>
                            <button onClick={() => {
                                let top = document.querySelector(`#${sect}`).getBoundingClientRect().top + window.scrollY || 0;
                                window.scroll({ top: top, behavior: 'smooth' });
                            }}>
                                {sect}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="content">
                    <h4 id="skills">Skills</h4>
                    {skills.map(skl => (
                        <div className="skills" key={skl.title}></div>
                    ))}

                    <img src={leafImg} className="leaf" alt="" />

                    <h4 id="education">Education</h4>
                    {education.map(({ years, school, certification, description }) => (
                        <div className="education" key={school}>
                            <h5>{years}</h5>
                            <h6>{school}</h6>
                            <span>{certification}</span>
                            <p>{description}</p>
                        </div>
                    ))}

                    <img src={leafImg} className="leaf" alt="" />

                    <h4 id="experience">Experience</h4>
                    {experience.map(({ years, role, description, notes }) => (
                        <div className="experience" key={role}>
                            <h5>{years}</h5>
                            <h6>{role}</h6>
                            <p>{description}
                                {notes && <span>{notes}</span>}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;