import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Prework', image: 'Challenge12React\Assests\Evolution-of-Coding-scaled.jpg', appLink: 'https://app1.com', repoLink: 'https://github.com/project1' },
  { title: 'Coding Gardners', image: 'Challenge12React\Assests\Tomato_je.jpg', appLink: 'https://app1.com', repoLink: 'https://github.com/project1' },
  { title: 'Stock Tracker', image: 'Challenge12React\Assests\stock ticker.jpg', appLink: 'https://app1.com', repoLink: 'https://github.com/project1' },
  { title: 'Project 4', image: 'Challenge12React\Assests\red-panda.jpg', appLink: 'https://app1.com', repoLink: 'https://github.com/project1' },
  { title: 'Project 5', image: 'Challenge12React\Assests\pine-tree.jpg', appLink: 'https://app1.com', repoLink: 'https://github.com/project1' },
  { title: 'Project 6', image: 'Challenge12React\Assests\beach.jpg', appLink: 'https://app1.com', repoLink: 'https://github.com/project1' },
];

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
