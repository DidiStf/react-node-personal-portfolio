import classnames from 'classnames';

import PrimaryButton from '../Buttons/PrimaryButton';
import PrimaryExternalLink from '../Buttons/PrimaryExternalLink';

import './Card.scss';

const ProjectsCard = ({ project }) => {
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
    <div className='ProjectsCard'>
      <div className='ProjectsCard_image-container'>
        <img
          className={classnames('ProjectsCard_image', isMobileApp && 'mobile')}
          src={images[0]}
          alt='screenshot'
        />
      </div>
      <div className='ProjectsCard_bottom'>
        <div className='ProjectsCard_details'>
          <h3>{name}</h3>
          <div className='ProjectsCard_technologies'>
            <strong>Technologies: </strong>
            {technologies.map((tech, i) => (
              <span key={i} className='ProjectsCard_technologies-tech'>
                {tech}{' '}
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
        <div className='ProjectsCard_actions'>
          {isMobileApp ? (
            <PrimaryButton onClick={() => console.log('open modal')}>
              See More
            </PrimaryButton>
          ) : (
            <PrimaryButton>
              <PrimaryExternalLink link={url}>Visit Site</PrimaryExternalLink>
            </PrimaryButton>
          )}
          <PrimaryButton>
            <PrimaryExternalLink link={github}>
              Check on Github
            </PrimaryExternalLink>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
