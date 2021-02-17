import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/shop-app',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const shopApp = {
  name: 'Shop App',
  description:
    'React-Native Shopping App that allows you to create a profile, check the available products, order, check your order details and manage the products you sell.',
  images,
  technologies: [
    'React-Native',
    'Redux',
    'Firebase',
    'JavaScript',
    'Push Notifications',
  ],
  github: 'https://github.com/DidiStf/react-native-shop-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
