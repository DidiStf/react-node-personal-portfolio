import './ContactForm.scss';

const ContactForm = () => {
    return (
        <div className="ContactForm">
            <form className="ContactForm_form">
                <h2 className="ContactForm_form_title">Contact Me</h2>
                <div className="ContactForm_form_input-box">
                    <input className="ContactForm_form_input" type="text" name="" required />
                    <span className="ContactForm_form_label">Full Name</span>
                </div>
                <div className="ContactForm_form_input-box">
                    <input className="ContactForm_form_input" type="email" name="" required />
                    <span className="ContactForm_form_label">Email Address</span>
                </div>
                <div className="ContactForm_form_input-box">
                    <input className="ContactForm_form_input" type="text" name="" required />
                    <span className="ContactForm_form_label">Subject</span>
                </div>
                <div className="ContactForm_form_input-box">
                    <textarea className="ContactForm_form_input" required />
                    <span className="ContactForm_form_label">Message </span>
                </div>
                <div className="ContactForm_form_input-box">
                    <input className="ContactForm_form_button" type="submit" value="Send" name="" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
