import { flatten } from 'flat';
import PropTypes from 'prop-types';
import { Fragment, useContext } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from '../../assets/translations/constants';
import { TranslationLocaleContext } from '../../context/TranslationLocaleProvider';
import messages from '../../assets/translations/messages';

const TranslationProvider = ({ children }) => {
  const { locale } = useContext(TranslationLocaleContext);

  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={flatten(messages[locale])}
    >
      {children}
    </IntlProvider>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string,
};

TranslationProvider.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default TranslationProvider;
