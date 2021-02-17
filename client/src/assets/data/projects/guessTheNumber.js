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
  description:
    'React-Native game with stack navigation that consists in choosing a number and letting the phone guess it by providing some hints. At the end, the application gives a resume on the result.',
  images,
  technologies: ['React-Native', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-guess-the-number-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
