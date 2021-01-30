import { useEffect, useState } from 'react';
import SVG3DTagCloud from '3d-word-cloud';

import './WordCloud.scss';

const entries = [
  { label: 'JavaScript' },
  { label: 'HTML' },
  { label: '(S)CSS' },
  { label: 'SASS' },
  { label: 'Bootstrap' },
  { label: 'Materialize' },
  { label: 'React' },
  { label: 'React-Native' },
  { label: 'Redux' },
  { label: 'NodeJs' },
  { label: 'Express' },
  { label: 'Expo' },
  { label: 'Firebase' },
  { label: 'MongoDB' },
  { label: 'PostgrSQL' },
  { label: 'AdobeXd' },
  { label: 'Figma' },
  { label: 'Git' },
  { label: 'Postman' },
  { label: 'Linux' },
  { label: 'Windows' },
  { label: 'REST' },
  { label: 'VueJs' },
  { label: 'jQuery' },
  { label: 'Jest' },
  /*{ label: 'Heroku' },
  { label: 'Netlify' },
  { label: "WebSockets" },
  { label: "WebRTC" }
  { label: "AWS" },
  { label: "TypeScript" },
  { label: "Php" },
  { label: "Laravel" },
  { label: "Selenuim" }*/
];

const SkillsWordCloud = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const settings = {
    entries: entries,
    width: windowWidth < 1100 ? (windowWidth < 550 ? 260 : 480) : 650,
    height: windowWidth < 1100 ? (windowWidth < 550 ? 260 : 480) : 650,
    radius: '55%',
    minRadius: 0,
    bgDraw: true,
    bgColor: '#132c3a',
    opacityOver: 1.0,
    opacityOut: 0.3,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: windowWidth <= 550 ? '14' : '17',
    fontColor: '#f5497d',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontToUpperCase: false,
  };

  useEffect(() => {
    const svg3DTagCloud = new SVG3DTagCloud(
      document.getElementById('wordCloud'),
      settings
    );
    svg3DTagCloud.animIn();

    return () => {
      svg3DTagCloud.animOut();
      svg3DTagCloud.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      window.location.reload();
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return <div id='wordCloud' className='SkillsWordCloud'></div>;
};

export default SkillsWordCloud;
