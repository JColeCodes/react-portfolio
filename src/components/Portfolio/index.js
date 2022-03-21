import React from 'react';

function Portfolio({ projects }) {
    return(
        <section className="portfolio-boxes">
            <h3>Portfolio</h3>
            {projects.map(project => (
                <div className="portfolio-box">
                    <a href={`${project.url}`} target="_blank" rel="noreferrer">
                        <img src={require(`../../assets/images/portfolio/${project.thumbnail}`)} alt={`${project.title}`} />
                        <div className="portfolio-text">
                            <h4>{project.title} <a href={`${project.repo}`} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></h4>
                            <p>{project.technologies.map(tech => (<span>{tech}</span>))}</p>
                        </div>
                    </a>
                </div>
            ))}
        </section>
    );
}

export default Portfolio;