import React from 'react';

const Project = ({ title, image, appLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={`${title} screenshot`} />
    <h3>{title}</h3>
    <a href={appLink} target="_blank" rel="noopener noreferrer">Live App</a>
    <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;
