import { LOCALES } from '../../translations/constants';
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
  description: {
    [LOCALES.ENGLISH]:
      "Shopping Mobile Application developed with React-Native, that allows the user to create a profile, check the available products, place orders, check the orders' details and manage the products he sells via the Admin Dashboard.",
    [LOCALES.FRENCH]:
      "Application Mobile de e-commerce, développée en React-Native, qui permet à l'utilisateur de créer un compte, consulter les produits dosponibles, passer des commandes, consulter le détail de ses commandes et gérer les produits qu'il a mis en vente à travers le panel Admin.",
    [LOCALES.SPANISH]:
      'Aplicación Móvil de comercio electrónico, desarrollada en React-Native, que permite al usuario crear una cuenta, consultar los artículos que están disponibles, hacer pedidos, consultar los detailles de sus pedidos y administrar los artículos que ha puesto en venta a través del panel Admin.',
    [LOCALES.BULGARIAN]:
      'Мобилна Апликация за онлайн търговия разработена с React-Native, която предоставя на потребителите възможност да създадат акаунт, да правят поръчки, да преглеждат подробно информацията за минали поръчки и да управляват продуктите, които са обявили за продажба с помощта на Админ панел.',
  },
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
