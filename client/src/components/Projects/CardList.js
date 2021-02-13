import ProjectsCard from './Card';

import { projects } from '../../assets/data/projects/projects';

import './CardList.scss';

const ProjectsCardList = () => {
  return (
    <div className='ProjectsCardList'>
      {projects.map((project, i) => (
        <ProjectsCard project={project} key={i} />
      ))}
    </div>
  );
};

export default ProjectsCardList;
