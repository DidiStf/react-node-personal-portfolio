import { useContext } from 'react';

import ContactButton from './ContactButton';
import DeveloperAnimationEn from './DeveloperAnimation/DeveloperAnimationEn';
import DeveloperAnimationEs from './DeveloperAnimation/DeveloperAnimationEs';
import DeveloperAnimationFr from './DeveloperAnimation/DeveloperAnimationFr';
import NameStrokeBg from './NameStroke/NameStrokeBg';
import NameStrokeEn from './NameStroke/NameStrokeEn';
import NameStrokeFr from './NameStroke/NameStrokeFr';

import { TranslationLocaleContext } from '../../context/TranslationLocaleProvider';
import { translate } from '../../utils/translate';

import './Presentation.scss';

const Presentation = () => {
  const { locale } = useContext(TranslationLocaleContext);

  return (
    <div className='Presentation'>
      <div className='Presentation_info'>
        <span className='Presentation_info_text'>
          {translate('home.presentation')}
        </span>{' '}
        {locale === 'bg' && <NameStrokeBg />}
        {locale === 'fr' && <NameStrokeFr />}
        {(locale === 'en' || locale === 'es') && <NameStrokeEn />}
      </div>
      <div className='Presentation_info'>
        <span className='Presentation_info_text'>
          {translate('home.profession')}
        </span>
        {(locale === 'en' || locale === 'bg') && <DeveloperAnimationEn />}
        {locale === 'fr' && <DeveloperAnimationFr />}
        {locale === 'es' && <DeveloperAnimationEs />}
      </div>
      <ContactButton />
    </div>
  );
};

export default Presentation;
