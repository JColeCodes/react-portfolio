import React, {useState} from 'react';
import leafImg from '../../assets/images/leaf-beige.png';

function Resume({ title }) {
    const sections = ["skills", "education", "experience"];
    const skills = [
        {
            title: "Frontend Development",
            specifics: [ "HTML5", "CSS3", "JavaScript", "DOM", "Wordpress", "Bootstrap", "Handlebars" ],
            slug: "frontend"
        }, {
            title: "Backend Development",
            specifics: [ "REST APIs", "JSON", "MySQL", "MVC", "MERN" ],
            slug: "backend"
        }, {
            title: "MERN Stack",
            specifics: [ "MongoDB", "Express.js", "React.js", "Node.js", "Apollo", "GraphQL" ],
            slug: "mern"
        }, {
            title: "Site Maintenance",
            specifics: [ "cPanel", "FTP" ],
            slug: "maintenance"
        }, {
            title: "UI / UX Design",
            specifics: [ "Adobe XD", "Color Theory", "Typography", "UI Grids", "Design Research" ],
            slug: "uiux"
        }, {
            title: "Graphic Design",
            specifics: [ "Adobe Photoshop", "Adobe Illustrator" ],
            slug: "graphic"
        }, {
            title: "Additional Resources",
            specifics: [ "Adobe Animate", "Python", "Java", "XCode", "Git" ],
            slug: "resources"
        }
    ]
    const education = [
        {
            years: "2021-2022",
            school: "UC Berkeley Extension",
            description: "Coming Soon!",
            certification: "Certificate"
        }, {
            years: "2015-2020",
            school: "West Valley College",
            description: "Some classes include: Visual Design for New Media, Portfolio Planning, Internet Marketing, Mobile Marketing, Adobe Animate, Python Programming, and MORE!",
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
    const [skillCollapse, setSkillCollapse] = useState('none');

    return(
        <section>
            <h3>{title}</h3>
            <div className="resume">
                <ul className="sidebar">
                    {sections.map(sect => (
                        <li key={sect}>
                            <button onClick={() => {
                                let offset;
                                window.innerWidth <= 600 ? offset = 60 : offset = 0;
                                let top = document.querySelector(`#${sect}`).getBoundingClientRect().top + window.scrollY - offset || 0;
                                window.scroll({ top: top, behavior: 'smooth' });
                            }}>
                                {sect}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="content">
                    <p className="download">
                        This resume was last updated December 2020. A new one will be added here shortly!<br />
                        <a href="https://colecodes.com/ResumeDecember2020.pdf" target="_blank"  rel="noreferrer">Download my resume!</a>
                    </p>
                    <h4 id="skills">Skills</h4>
                    {skills.map(skl => (
                        <div className="disp skills" key={skl.slug}>
                            <div className="skl-title" id={skl.slug}>
                                <button onClick={(e) => {
                                    let skillId = e.target.parentElement.parentElement.getAttribute("id");
                                    let skillToggleIcon = e.target.parentElement.lastChild.classList;
                                    let skillList = e.target.parentElement.parentElement.parentElement.parentElement.childNodes;
                                    
                                    [...skillList].forEach(skill => {
                                        if (skill.classList.contains("skills")) {
                                            setSkillCollapse('none');
                                            let skillToggleIconEach = skill.firstChild.lastChild.lastChild.classList;
                                            skill.lastChild.removeAttribute("style");
                                            skillToggleIconEach.remove("fa-caret-up");
                                            skillToggleIconEach.add("fa-caret-down");
                                        }
                                    });
                                    if (skillCollapse !== skillId) {
                                        setSkillCollapse(skillId);
                                        let skillsList = e.target.parentElement.parentElement.parentElement.lastChild;
                                        skillToggleIcon.add("fa-caret-up");
                                        skillToggleIcon.remove("fa-caret-down");
                                        skillsList.style.height = skillsList.scrollHeight + "px";
                                    }
                                }}><span>{skl.title}</span><i className="fa-solid fa-caret-down"></i></button>
                            </div>
                            <ul className="skl-body">
                                {skl.specifics.map(item => (
                                    <li key={item}><i className="fa-solid fa-leaf"></i> {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <img src={leafImg} className="leaf" alt="" />

                    <h4 id="education">Education</h4>
                    {education.map(({ years, school, certification, description }) => (
                        <div className="disp education" key={school}>
                            <h5>{years}</h5>
                            <h6>{school}</h6>
                            <span className="certification">{certification}</span>
                            <p>{description}</p>
                        </div>
                    ))}

                    <img src={leafImg} className="leaf" alt="" />

                    <h4 id="experience">Experience</h4>
                    {experience.map(({ years, role, description, notes }) => (
                        <div className="disp experience" key={role}>
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