import classnames from 'classnames';
import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ImageSlider from '../ImageSlider/Slider';

import ProjectModalContext from '../../context/projectModal/projectModalContext';

import './Modal.scss';

const ProjectModal = () => {
  const { currentProject, open, toggleModalAction } = useContext(
    ProjectModalContext
  );

  useEffect(() => {}, []);

  return (
    <div className={classnames('ProjectModal_background', open && 'open')}>
      {open && (
        <div
          className={classnames(
            'ProjectModal_inner',
            currentProject.isMobileApp && 'mobileSlider'
          )}
        >
          <ImageSlider project={currentProject} />
        </div>
      )}
      <span className='ProjectModal_toggler' onClick={toggleModalAction}>
        <FontAwesomeIcon className='ProjectModal_toggler-icon' icon={faTimes} />
      </span>
    </div>
  );
};

export default ProjectModal;
