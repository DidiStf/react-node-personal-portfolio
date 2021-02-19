import { LOCALES } from '../../translations/constants';
import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/game-maze-api',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const gameMazeApi = {
  name: 'Game Maze API',
  description: {
    [LOCALES.ENGLISH]:
      "REST API that I developed as part of one of my graduation projects called Game Maze. It gives access to detailed information about various video games. It also contains other information such as users' comments, ratings and messages and serves as a back-end for the Game Maze mobile app project.",
    [LOCALES.FRENCH]:
      "API REST que j'ai développée pour un de mes projets de fin d'études portant le nom Game Maze. Elle donne accès à des informations détaillées sur plusieurs jeux vidéo. Elle contient également d'autres informations comme les comentaires des utilisateurs, les notes qu'ils ont données et leurs messages et serve de back-end pour le projet d'application mobile Game Maze.",
    [LOCALES.SPANISH]:
      'API REST que he desarrollado para uno de mis proyectos de fin de carrera llamado Game Maze. Ella da acceso a una información detallada sobre varios videojuegos. Ella contiene igualemente otros datos como los comentarios de los usuarios, las notas que esos últimos han dado y sus mensajes et sirve de back-end para el proyecto de applicación móvil Game Maze.',
    [LOCALES.BULGARIAN]:
      'REST уеб приложение (API), което разработих като част от един от дипломните ми проекти, наречен Game Maze. То дава достъп до детайлна информация за различни видеоигри. Също така, съдържа и данни като потребителските коментари, оценките които те са дали и съобщенията им и служи за back-end за проекта за мобилна апликация Game Maze.',
  },
  images,
  technologies: [
    'Node',
    'Express',
    'MongoDB',
    'JavaScript',
    'Css',
    'Github API',
  ],
  github: 'https://github.com/DidiStf/game-maze-api',
  url: 'https://game-maze.herokuapp.com/api/games',
  isMobileApp: false,
  isDesignPrototype: false,
};
