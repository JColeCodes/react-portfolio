import React from 'react';
import Project from '../../components/Project';

function Portfolio({ projects, title }) {
    return(
        <section className="portfolio-boxes">
            <h3>{title}</h3>
            {projects.map(project => (
                <Project project={project} key={project.title} />
            ))}
        </section>
    );
}

export default Portfolio;