import classnames from 'classnames';
import { useContext } from 'react';

import PrimaryButton from '../Buttons/PrimaryButton';
import PrimaryExternalLink from '../Buttons/PrimaryExternalLink';

import ProjectModalContext from '../../context/projectModal/projectModalContext';

import './Card.scss';

const ProjectCard = ({ project }) => {
  const { toggleModalAction } = useContext(ProjectModalContext);

  const {
    name,
    description,
    images,
    technologies,
    github,
    url,
    isMobileApp,
  } = project;

  return (
    <div className='ProjectCard'>
      <div
        className='ProjectCard_image-container'
        onClick={() => toggleModalAction(project)}
      >
        <img
          className={classnames('ProjectCard_image', isMobileApp && 'mobile')}
          src={images[0]}
          alt='screenshot'
        />
      </div>
      <div className='ProjectCard_bottom'>
        <div className='ProjectCard_details'>
          <h3>{name}</h3>
          <div className='ProjectCard_technologies'>
            <strong>Technologies: </strong>
            {technologies.map((tech, i) => (
              <span key={i} className='ProjectCard_technologies-tech'>
                {tech}
                {i !== technologies.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </div>
          <p>
            <strong>
              <u>Description</u>:{' '}
            </strong>
            {description}
          </p>
        </div>
        <div className='ProjectCard_actions'>
          {isMobileApp ? (
            <PrimaryButton onClick={() => toggleModalAction(project)}>
              See More
            </PrimaryButton>
          ) : (
            <PrimaryButton>
              <PrimaryExternalLink link={url}>Visit Site</PrimaryExternalLink>
            </PrimaryButton>
          )}
          <PrimaryButton>
            <PrimaryExternalLink link={github}>
              Check Github
            </PrimaryExternalLink>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
