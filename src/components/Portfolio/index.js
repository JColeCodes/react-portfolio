import React from 'react';

function Portfolio({ projects }) {
    return(
        <section className="portfolio-boxes">
            <h3>Portfolio</h3>
            {projects.map(project => (
                <div className="portfolio-box" key={project.title}>
                    <img src={require(`../../assets/images/portfolio/${project.thumbnail}`)} alt={`${project.title}`} />
                    <div className="portfolio-overlay"></div>
                    <div className="portfolio-text">
                        <h4>
                            <a href={`${project.url}`} target="_blank" rel="noreferrer">{project.title} <i className="fa-solid fa-link"></i></a> 
                            <a href={`${project.repo}`} target="_blank" rel="noreferrer"><i className="fa-brands fa-github gh-link"></i></a>
                        </h4>
                        <p>{project.technologies.map(tech => (<span key={tech}>{tech}</span>))}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Portfolio;