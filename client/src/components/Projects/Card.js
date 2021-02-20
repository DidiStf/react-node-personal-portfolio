import classnames from 'classnames';
import { useContext } from 'react';

import PrimaryButton from '../Buttons/PrimaryButton';
import PrimaryExternalLink from '../Buttons/PrimaryExternalLink';

import { ProjectModalContext } from '../../context/ProjectModalProvider';
import { TranslationLocaleContext } from '../../context/TranslationLocaleProvider';

import { translate } from '../../utils/translate';

import './Card.scss';

const ProjectCard = ({ project }) => {
  const { toggleModalAction } = useContext(ProjectModalContext);
  const { locale } = useContext(TranslationLocaleContext);

  const {
    name,
    description,
    images,
    technologies,
    github,
    url,
    demo,
    isMobileApp,
    isDesignPrototype,
  } = project;

  return (
    <div className='ProjectCard'>
      <div
        className='ProjectCard_image-container'
        onClick={() => toggleModalAction(project)}
      >
        {images?.length && (
          <img
            className={classnames('ProjectCard_image', isMobileApp && 'mobile')}
            src={images[0]}
            alt='screenshot'
          />
        )}
      </div>
      <div className='ProjectCard_bottom'>
        <div className='ProjectCard_details'>
          <h3>{name}</h3>
          <div className='ProjectCard_technologies'>
            <strong>{translate('projects.technologies')} : </strong>
            {technologies.map((tech, i) => (
              <span key={i} className='ProjectCard_technologies-tech'>
                {tech}
                {i !== technologies.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </div>
          <p>
            <strong>
              <u>{translate('projects.description')}</u> :{' '}
            </strong>
            {description[locale]}
          </p>
        </div>
        <div className='ProjectCard_actions'>
          {isMobileApp ? (
            <PrimaryButton onClick={() => toggleModalAction(project)}>
              {translate('projects.seeMoreBtn')}
            </PrimaryButton>
          ) : (
            <PrimaryExternalLink link={url}>
              {translate('projects.visitSiteBtn')}
            </PrimaryExternalLink>
          )}
          {isDesignPrototype ? (
            <PrimaryExternalLink link={demo}>
              {translate('projects.watchDemoBtn')}
            </PrimaryExternalLink>
          ) : (
            <PrimaryExternalLink link={github}>
              {translate('projects.checkGithubBtn')}
            </PrimaryExternalLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
