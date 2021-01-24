import ContactButton from './ContactButton';
import DeveloperAnimation from './DeveloperAnimation';
import NameAnimation from './NameAnimation';

import './Presentation.scss';

const Presentation = () => {
    return (
        <div className="Presentation">
            <div className="Presentation_info">
                <span className="Presentation_info_text">Hello. I'm</span> <NameAnimation />
            </div>
            <div className="Presentation_info">
                <span className="Presentation_info_text">I'm a</span><DeveloperAnimation />
            </div>
            <ContactButton />
        </div>
    );
};

export default Presentation;
