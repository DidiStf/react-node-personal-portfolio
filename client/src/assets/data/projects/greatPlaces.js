import { LOCALES } from '../../translations/constants';
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
  description: {
    [LOCALES.ENGLISH]:
      "Mobile Application developed in React-Native that uses native device features like camera, gps and internal local storage. The Application allows you to create a personal photo album by taking a photo (of a cool place, monument, etc.) and save it to your phone with it's exact location.",
    [LOCALES.FRENCH]:
      "Application Mobile développée en React-Native qui utilise les fonctionalités natives du dispositif comme la caméra, le gps et le système de stockage locale interne. L'Application permet à l'utilisateur de créer un album personnel en prenant une photo (d'un endroit, monument, etc.) et en la sauvegardant sur le téléphone avec ses coordonnées géographiques.",
    [LOCALES.SPANISH]:
      'Aplicación Móvil desarrollada en React-Native que usa las funcionalidades nativas del dispositivo como la cámara, el modulo gps y el sistema de alacenamiento interno. La Aplicación permite al usuario crear un álbum tomando una foto (de un lugar, un monumento, etc.) y de guardarla en la memoria interna del teléfono, junto con las coordenadas geográficas.',
    [LOCALES.BULGARIAN]:
      'Мобилно Приложение разработено с React-Native, което изпозва вградените в устройството модули като камера, gps и вградената памет на телефона. Апликацията позволява създаването на личен фотоалбум. Потребителят може да направи снимка (на интересно място, паметник и т.н.) и да я запази в паметта на устройството.',
  },
  images,
  technologies: ['React-Native', 'Redux', 'SQLite', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-great-places-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
