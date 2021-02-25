import image from '../../assets/images/img-contact.webp';

import './Image.scss';

const ContactImage = () => (
  <div className='ContactImage'>
    <img src={image} className='ContactImage_image' alt='Dilyana Stefanova' />
  </div>
);

export default ContactImage;
