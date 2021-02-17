import classnames from 'classnames';
import validator from 'email-validator';
import { useCallback, useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ContactFormContext } from '../../context/ContactFormProvider';

import './Form.scss';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  nameError: false,
  emailError: false,
  subjectError: false,
  messageError: false,
};

const ContactForm = () => {
  const {
    error,
    loading,
    success,
    resetContactStateAction,
    sendContactEmailAction,
  } = useContext(ContactFormContext);
  const [contactData, setContactData] = useState(initialState);

  const {
    name,
    email,
    subject,
    message,
    nameError,
    emailError,
    subjectError,
    messageError,
  } = contactData;

  const validateData = useCallback(() => {
    const isNameValid = contactData.name !== '';
    const isEmailValid = validator.validate(contactData.email);
    const isSubjectValid = contactData.subject !== '';
    const isMessageValid = contactData.message.length >= 10;

    setContactData((prevData) => ({
      ...prevData,
      nameError: !isNameValid,
      emailError: !isEmailValid,
      subjectError: !isSubjectValid,
      messageError: !isMessageValid,
    }));

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return false;
    }
    return true;
  }, [
    contactData.email,
    contactData.message.length,
    contactData.name,
    contactData.subject,
  ]);

  const handleSubmit = useCallback(async () => {
    const isValid = validateData();
    if (!isValid) {
      return null;
    }
    await sendContactEmailAction(contactData);
    setContactData(initialState);
  }, [contactData, sendContactEmailAction, validateData]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  useEffect(() => {
    if (success || error) {
      setTimeout(() => resetContactStateAction(), 5000);
    }
  }, [error, resetContactStateAction, success]);

  return (
    <div className='ContactForm'>
      <form className='ContactForm_form'>
        <h2 className='ContactForm_form_title'>Contact Me</h2>
        <div className='ContactForm_form_input-box'>
          <input
            className='ContactForm_form_input'
            name='name'
            onChange={(e) => handleChange(e)}
            required
            type='text'
            value={name}
          />
          <span className='ContactForm_form_label'>
            Full Name
            <span className={classnames(nameError && 'error')}>*</span>
          </span>
        </div>
        <div className='ContactForm_form_input-box'>
          <input
            className='ContactForm_form_input'
            name='email'
            onChange={(e) => handleChange(e)}
            required
            type='email'
            value={email}
          />
          <span className='ContactForm_form_label'>
            Email Address
            <span className={classnames(emailError && 'error')}>*</span>
          </span>
        </div>
        <div className='ContactForm_form_input-box'>
          <input
            className='ContactForm_form_input'
            name='subject'
            onChange={(e) => handleChange(e)}
            type='text'
            required
            value={subject}
          />
          <span className='ContactForm_form_label'>
            Subject
            <span className={classnames(subjectError && 'error')}>*</span>
          </span>
        </div>
        <div className='ContactForm_form_input-box'>
          <textarea
            className='ContactForm_form_input'
            minLength={10}
            name='message'
            onChange={(e) => handleChange(e)}
            required
            value={message}
          />
          <span className='ContactForm_form_label'>
            Message
            <span className={classnames(messageError && 'error')}>*</span>
          </span>
        </div>
        <div className='ContactForm_form_input-box submit'>
          <button
            className='ContactForm_form_button'
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                className='ContactForm_form_button_icon'
              />
            ) : (
              'Send'
            )}
          </button>
          {success && (
            <span className='ContactForm_form_message'>Email Sent!</span>
          )}
          {error && (
            <span className='ContactForm_form_message'>An error ocurred.</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
