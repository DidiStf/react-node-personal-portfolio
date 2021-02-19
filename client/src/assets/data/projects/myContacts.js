import { LOCALES } from '../../translations/constants';
import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/my-contacts',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const myContacts = {
  name: 'My Contacts',
  description: {
    [LOCALES.ENGLISH]:
      'MERN Stack Contact Manager Web Application that allows the user to create an account and manage his personal and professional contacts (name, email, phone and category).',
    [LOCALES.FRENCH]:
      "Application Web de gestion de contacts de type MERN Stack qui permet à l'utilisateur de créer un compte et de gérer ses contacts personnels et professionnels (nom, adresse email, numéro de télephone et catégorie).",
    [LOCALES.SPANISH]:
      'Applicación Web de gestión de contactos de typo MERN Stack que permite al usuario de crear une cuenta y de administrar sus contactos personales y profesionales (nombre, correo electrónico, número de teléfono y categoría).',
    [LOCALES.BULGARIAN]:
      'Уеб Апликация за управление нан контакти (MERN Stack), която позволява на потребителите да си създадат акаунт и да управляват своите лични и професионални контакти (име, електроннен адрес, телегонен номер и категория).',
  },
  images,
  technologies: [
    'React',
    'Node',
    'Express',
    'MongoDB',
    'JWT',
    'JavaScript',
    'Jest',
    'Supertest',
  ],
  github: 'https://github.com/DidiStf/mern-my-contacts-app',
  url: 'https://my-contacts-didistf.herokuapp.com/',
  isMobileApp: false,
  isDesignPrototype: false,
};
