import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/great-places',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const greatPlaces = {
  name: 'Great Places',
  description:
    "React-Native app that uses native device features like camera, gps and internal local storage. The App allows you to create a personal photo album by taking a photo (of a cool place, monument, etc.) and save it to your phone with it's exact location.",
  images,
  technologies: ['React-Native', 'Redux', 'SQLite', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-great-places-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
