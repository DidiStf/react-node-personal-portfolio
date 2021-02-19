import { translate } from '../../utils/translate';

import './Info.scss';

const AboutInfo = () => {
  return (
    <div className='AboutInfo'>
      <h3 className='AboutInfo_heading'>{translate('about.presentation')}</h3>
      <p className='AboutInfo_info'>
        {translate('about.info1')}
        <br />
        <br />
        {translate('about.info2')} <i>{translate('about.mastersDegree')}</i>
        {translate('about.info3')} <i>{translate('about.bachelorsDegree')}</i>
        <br />
        <br />
        {translate('about.info4')}
        <br />
        <br />
        <strong>{translate('about.interestsHeading')}</strong>
        {translate('about.info5')}
      </p>
    </div>
  );
};

export default AboutInfo;
