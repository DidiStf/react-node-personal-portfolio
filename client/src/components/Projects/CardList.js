import ProjectCard from './Card';

import { projects } from '../../assets/data/projects/projects';

import './CardList.scss';

const ProjectsCardList = () => (
  <div className='ProjectsCardList'>
    {projects.map((project, i) => (
      <ProjectCard project={project} key={i} />
    ))}
  </div>
);

export default ProjectsCardList;
