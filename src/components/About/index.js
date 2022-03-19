import React from 'react';
import jcface from '../../assets/images/jcface.jpg';

function About() {
    const quickInfo = [
        { title: "A.A. Degree", subtitle: "in Web & App Development" },
        { title: "Silicon Valley", subtitle: "Based in California" },
        { title: "Experience", subtitle: "Over a decade of experience with code and design!" },
    ];
    const quickSkills = ["Git", "HTML + CSS", "JavaScript + jQuery", "Node.js + React", "Photoshop + Illustrator", "...And More!"];
    return(
        <section id="about" className="about-me">
            <div className="quick-info">
                <div className="self-image">
                    <img src={jcface} alt="Jennifer Cole" />
                </div>
                {quickInfo.map(info => (
                    <div className="info-box">
                    <h4>{info.title}</h4>
                    <p>{info.subtitle}</p>
                    </div>
                ))}
            </div>
            <div className="main-content">
                <h3>My name is Jennifer Cole and...</h3>
                <p>
                    I am a Silicon Valley-based independent web and graphic designer, and casual illustrator. I have experience with designing for both WordPress themes, as well as non-WordPress sites. All of my final coding is mobile responsive. I also have over a decade experience working with Adobe Photoshop. I really enjoy combining the technical aspects of coding with the artistic aspects of graphic design. I'm highly adaptable to what needs to be done and can quickly learn anything that needs to be learned for a job.
                </p>
                <p>
                    Prior to the COVID-19 pandemic, I worked with the West Valley College digital media department as the student assistant. I have fully coded, from scratch, the current West Valley Digital Media site, and have created flyers for the department. I then went on to do U.C. Berkeley Extension's Coding Bootcamp and was able to learn and expand my knowledge to encapulate the MERN stack and do a lot more JavaScript-based coding.
                </p>
                <ul className="quick-skills">
                    {quickSkills.map(skill => (
                        <li>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="quick-info">
                <p className="about-text">
                    With the mind for logic and the eye for aesthetic, I'm a very versitle designer who has intimate underdstanding in both the code and graphic aspects of a design, making me a flexible and valuable asset to any team.
                </p>
            </div>
        </section>
    );
}

export default About;