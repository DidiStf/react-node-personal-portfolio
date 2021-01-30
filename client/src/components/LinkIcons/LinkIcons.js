import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import './LinkIcons.scss';

const LinkIcons = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iconSize = windowWidth < 450 ? '2x' : '3x';

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='LinkIcons'>
      <a
        className='LinkIcons_link'
        href='https://www.linkedin.com/in/dilyana-stefanova-0b0782193/'
        rel='noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className='LinkIcons_icon'
          size={iconSize}
        />
      </a>
      <a
        className='LinkIcons_link'
        href='https://github.com/DidiStf'
        rel='noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon
          icon={faGithubSquare}
          className='LinkIcons_icon'
          size={iconSize}
        />
      </a>
    </div>
  );
};

export default LinkIcons;
