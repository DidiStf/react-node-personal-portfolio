import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import LinkIcons from '../../components/LinkIcons/LinkIcons';
import Presentation from '../../components/Presentation/Presentation';

import './Home.scss';

const HomeView = () => (
  <div className='HomeView'>
    <LinkIcons />
    <Presentation />
    <AnimatedBackground />
  </div>
);

export default HomeView;
