import { Link } from 'react-router-dom';

import './ContactButton.scss';

const ContactButton = () => {
    return (
        <div className="ContactButton">
            <Link to="/contact" className="ContactButton_link">Contact me</Link>
        </div>
    );
};

export default ContactButton;
