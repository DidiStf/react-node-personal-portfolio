import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/my-meals',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const myMeals = {
  name: 'My Meals',
  description:
    'Very simple React Native app that allows you to choose a meal recipe from different meal categories with the option to apply some filters, check the meal details and include or exclude it from your favorite meals list. You can also check out your favorite meals. The app uses Redux for the state management, multiple types of navigation and a hard-coded mocked database.',
  images,
  technologies: ['React-Native', 'Redux', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-meals-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
