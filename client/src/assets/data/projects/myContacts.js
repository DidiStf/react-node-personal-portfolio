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
  description:
    'MERN Stack Contact Manager Web Application that allows you to create an account and manage your personal and professional contacts (name, email, phone and category).',
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
