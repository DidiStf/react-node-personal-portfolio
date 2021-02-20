import image from '../../assets/images/img-about.png';

import './Image.scss';

const AboutImage = () => (
  <div className='AboutImage'>
    <img src={image} className='AboutImage_image' alt='Dilyana Stefanova' />
  </div>
);

export default AboutImage;
