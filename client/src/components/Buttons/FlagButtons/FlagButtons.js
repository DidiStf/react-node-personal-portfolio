import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import FlagButton from './FlagButton';
import { TranslationLocaleContext } from '../../../context/TranslationLocaleProvider';

import flag_bg from '../../../assets/flags/flag_bg.png';
import flag_en from '../../../assets/flags/flag_en.png';
import flag_es from '../../../assets/flags/flag_es.png';
import flag_fr from '../../../assets/flags/flag_fr.png';

import './FlagButtons.scss';

const FlagButtons = () => {
  const { locale, setLocaleAction } = useContext(TranslationLocaleContext);

  return (
    <div className='FlagButtons'>
      <FormattedMessage id='flags.british'>
        {(alt) => (
          <FlagButton
            image={flag_en}
            active={locale === 'en'}
            alt={alt}
            onClick={() => setLocaleAction('en')}
          />
        )}
      </FormattedMessage>
      <FormattedMessage id='flags.french'>
        {(alt) => (
          <FlagButton
            image={flag_fr}
            active={locale === 'fr'}
            alt={alt}
            onClick={() => setLocaleAction('fr')}
          />
        )}
      </FormattedMessage>
      <FormattedMessage id='flags.spanish'>
        {(alt) => (
          <FlagButton
            image={flag_es}
            active={locale === 'es'}
            alt={alt}
            onClick={() => setLocaleAction('es')}
          />
        )}
      </FormattedMessage>
      <FormattedMessage id='flags.bulgarian'>
        {(alt) => (
          <FlagButton
            image={flag_bg}
            active={locale === 'bg'}
            alt={alt}
            onClick={() => setLocaleAction('bg')}
          />
        )}
      </FormattedMessage>
    </div>
  );
};

export default FlagButtons;
