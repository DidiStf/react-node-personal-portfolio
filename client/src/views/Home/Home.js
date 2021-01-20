import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Presentation from '../../components/Presentation/Presentation';

import './Home.scss';

const HomeView = () => {

    return (
        <div className="HomeView">
            <Presentation />
            <AnimatedBackground />
        </div>
    );
};

export default HomeView;
