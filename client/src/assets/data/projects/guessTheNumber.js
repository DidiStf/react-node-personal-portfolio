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
      'Mobile game developed in React-Native, that uses stack navigation. The goal of the game is to choose a number and let the phone guess it by providing some hints. At the end, the application gives a brief summary of the result.',
    [LOCALES.FRENCH]:
      "Jeu mobile, développé en React-Native, qui utilise une navigation de type stack. Le but du jeu est de choisir un numéro et de faire deviner le téléphone, en lui donnant des indices. À la fin, l'application fait un compte-rendu du résultat.",
    [LOCALES.SPANISH]:
      'Juego móvil, desarrollado en React-Native, que usa una navegación de tipo stack. El juego consiste en elegir un número y lograr que el teléfono lo adivine, dándole algunas pistas. Al final, la aplicación da un breve resumen del resultado.',
    [LOCALES.BULGARIAN]:
      'Мобилна игра, разработена с React-Native, която използва stack навикация. Играта се състои в това, потребителят да избере число и да накара телефона да го познае, давайки му напътствия. На края на играта, приложението дава кратко обобщение на резултата.',
  },
  images,
  technologies: ['React-Native', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-guess-the-number-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
