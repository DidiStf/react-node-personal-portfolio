import { LOCALES } from '../../translations/constants';
import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/github-finder',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const githubFinder = {
  name: 'Github Finder',
  description: {
    [LOCALES.ENGLISH]:
      'Web Application developed in React that allows you to find GitHub profiles, get basic information (such as username, avatar, bio, website, followers, following, etc.) and the five more recent public repositories for a specific user and go to his full GitHub page. The application uses Github API and React Context for the state management.',
    [LOCALES.FRENCH]:
      "Application Web développée en React qui permet de rechercher des profils GitHub et de consulter des informations de bases (nom d'utilisateur, avatar, bio, site web, followers, following, etc.) et les cinq dépôts publiques plus récents pour chaque utilisateur ainsi que de visiter sa page GitHub officielle. L'application utilise l'API Github et React Context pour la gestion de l'état.",
    [LOCALES.SPANISH]:
      'Aplicación Web desarrollada en React que permite buscar perfiles GitHub y consultar los datos principales (nombre de usuario, avatar, bio, sitio web, followers, following, etc.) y los cinco repositorios públicos más recientes para cada usuario así que visitar su página Github oficial. La aplicación usa la API de Github y React Context para la gestión del estado.',
    [LOCALES.BULGARIAN]:
      'Уеб Апликация разработена с React, която позволява търсенето на GitHub потребители и дава основна информация (потребителски име, аватар, биография, уебсайт, последователи и последвани потребители и т.н.), петте най-скорошни хранилища, както и съдържа препратка към официалната Github страница на всеки потребител. Приложението използва огициалната Github API и React Context за управление на състоянието.',
  },
  images,
  technologies: ['React', 'JavaScript', 'Css', 'Github API'],
  github: 'https://github.com/DidiStf/react-github-finder',
  url: 'https://github-finder-didistf.netlify.com',
  isMobileApp: false,
  isDesignPrototype: false,
};
