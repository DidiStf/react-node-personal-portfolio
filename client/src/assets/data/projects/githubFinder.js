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
      'Web Application developed in React, that allows you to find GitHub profiles, get basic information (such as username, avatar, bio, website, followers, following, etc.) and the five more recent public repositories for a specific user. There is also a link to his full GitHub page. The application uses the official Github API and React Context for the state management.',
    [LOCALES.FRENCH]:
      "Application Web, développée en React, qui permet de rechercher des profils GitHub et de consulter des informations de base (nom d'utilisateur, avatar, bio, site web, followers, following, etc.) et les cinq dépôts publiques plus récents pour chaque utilisateur. Il s'y trouve aussi un lien vers la page GitHub complète. L'application utilise l'API oficielle de Github et React Context pour la gestion de l'état.",
    [LOCALES.SPANISH]:
      'Aplicación Web, desarrollada en React, que permite buscar perfiles GitHub y consultar los datos principales (nombre de usuario, avatar, bio, sitio web, followers, following, etc.) y los cinco repositorios públicos más recientes para cada usuario. También hay un enlace a la página Github completa. La aplicación usa la API oficial de Github y React Context para la gestión del estado.',
    [LOCALES.BULGARIAN]:
      'Уеб Апликация разработена с React, която позволява търсенето на GitHub потребителски профили и дава основна информация (потребителско име, аватар, биография, уебсайт, последователи и последвани потребители и т.н.), както и петте най-скорошни хранилища. Съдържа и препратка към пълната Github страница на всеки потребител. Приложението използва официалната Github API и React Context за управление на състоянието.',
  },
  images,
  technologies: ['React', 'JavaScript', 'Css', 'Github API'],
  github: 'https://github.com/DidiStf/react-github-finder',
  url: 'https://github-finder-didistf.netlify.com',
  isMobileApp: false,
  isDesignPrototype: false,
};
