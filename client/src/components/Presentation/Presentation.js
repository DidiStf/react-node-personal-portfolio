import ContactButton from './ContactButton';
import DeveloperAnimation from './DeveloperAnimation';
import NameAnimation from './NameAnimation';

import './Presentation.scss';

const Presentation = () => {
    return (
        <div className="Presentation">
            <div className="Presentation_info">
                <span>Hello. I'm</span> <NameAnimation />
            </div>
            <div className="Presentation_info">
                <span>I'm a</span><DeveloperAnimation />
            </div>
            <ContactButton />
        </div>
    );
};

export default Presentation;
