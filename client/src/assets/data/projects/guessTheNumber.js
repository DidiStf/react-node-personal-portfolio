import { LOCALES } from '../../translations/constants';
import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/guess-the-number',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const guessTheNumber = {
  name: 'Guess The Number',
  description: {
    [LOCALES.ENGLISH]:
      'Small mobile game developed in React-Native that uses stack navigation and consists in choosing a number and letting the phone guess it by providing some hints. At the end, the application gives a resume on the result.',
    [LOCALES.FRENCH]:
      "Petit jeu mobile développé en React-Native qui utilise une navigation de type stack et consiste en choisir un numéro et faire le téléphone le deviner en lui donnant des indices. À la fin, l'application donne un résumé du résultat.",
    [LOCALES.SPANISH]:
      'Pequeño juego móvil desarrollado en React-Native que usa una navegación de tipo stack y consiste en elegir un número y lograr que el teléfono lo adinivne, dándole algunas pistas. Al final, la aplicación da un breve resumen del resultado.',
    [LOCALES.BULGARIAN]:
      'Малка мобилна игра разработена с React-Native, която използва stack навикация и се състои в това, потребителят да избере число и да накара телефона да го познае, давайки му напътствия. На края на играта, приложението дава подробно обобщение на резултата.',
  },
  images,
  technologies: ['React-Native', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-guess-the-number-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
