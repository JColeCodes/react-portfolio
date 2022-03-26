import React from 'react';

function Project({ project }) {
    const { title, technologies, thumbnail, repo, url } = project;
    return(
        <div className="portfolio-box">
            <img src={require(`../../assets/images/portfolio/${thumbnail}`)} alt={`${title}`} />
            <div className="portfolio-overlay"></div>
            <div className="portfolio-text">
                <h4>
                    <a href={`${url}`} target="_blank" rel="noreferrer">{title} <i className="fa-solid fa-link"></i></a> 
                    <a href={`${repo}`} target="_blank" rel="noreferrer"><i className="fa-brands fa-github gh-link"></i></a>
                </h4>
                <p>{technologies.map(tech => (<span key={tech}>{tech}</span>))}</p>
            </div>
        </div>
    );
}

export default Project;