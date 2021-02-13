import img1 from '../../screenshots/my-meals/01.jpg';
import img2 from '../../screenshots/my-meals/02.jpg';
import img3 from '../../screenshots/my-meals/03.jpg';
import img4 from '../../screenshots/my-meals/04.jpg';
import img5 from '../../screenshots/my-meals/05.jpg';
import img6 from '../../screenshots/my-meals/06.jpg';
import img7 from '../../screenshots/my-meals/07.jpg';
import img8 from '../../screenshots/my-meals/08.jpg';

export const myMeals = {
  name: 'My Meals',
  description:
    'Very simple React Native app that allows you to choose a meal recipe from different meal categories with the option to apply some filters, check the meal details and include or exclude it from your favorite meals list. You can also check out your favorite meals. The app uses Redux for the state management, multiple types of navigation and a hard-coded mocked database.',
  images: [img1, img2, img3, img4, img5, img6, img7, img8],
  technologies: ['React-Native', 'Redux', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-meals-app',
  isMobileApp: true,
};
