import { useEffect, useState } from 'react';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import LinkIcon from './LinkIcon';

import './LinkIcons.scss';

const LinkIcons = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iconSize = windowWidth < 450 ? '2x' : '3x';
  const linkedInLink =
    'https://www.linkedin.com/in/dilyana-stefanova-0b0782193/';
  const githubLink = 'https://github.com/DidiStf';

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
      <LinkIcon icon={faLinkedin} iconSize={iconSize} link={linkedInLink} />
      <LinkIcon icon={faGithubSquare} iconSize={iconSize} link={githubLink} />
    </div>
  );
};

export default LinkIcons;
