import React, {useState} from 'react';
import { sections, skills, education, experience } from '../../assets/resume-info';
import leafImg from '../../assets/images/leaf-beige.png';

function Resume({ title }) {
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