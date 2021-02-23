import { LOCALES } from '../../translations/constants';
import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/game-maze-doc',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const gameMazeDoc = {
  name: 'Game Maze API Documentation',
  description: {
    [LOCALES.ENGLISH]:
      'Detailed documentation for the Game Maze REST API built as part of my graduation projects. It contains all the information needed for the use of the Game Maze API, such as endpoints, available http requests, headings, parameters, responses, errors and permissions.',
    [LOCALES.FRENCH]:
      'Documentation détaillée pour l\'API REST Game Maze, élaborée pour un de mes projets de fin d\'études. Elle contient toutes les informations nécessaires pour l\'utilisation de l\'API Game Maze, comme les "endpoints", les requêtes HTTP disponibles, les "headings", les paramettres, les réponses, les erreurs et les permissions.',
    [LOCALES.SPANISH]:
      'Documentación detallada para la API REST Game Maze, hecha como parte de uno de mis proyectos de fin de curso. Ella ofrece todo tipo de información necesaria para el uso de la API Game Maze, como los "endpoints", las peticiones HTTP disponibles, las cabeceras (headers), los parámetros, las respuestas, los errores y las permisiones.',
    [LOCALES.BULGARIAN]:
      'Подробна докумнетация за REST уеб апликацията (API) Game Maze, изготвена като част от дипломните ми проекти. Тя съдържа цялата информация необходима за използването на back-end приложението (ендпойнтс, HTTP заявки, параметри, отговори, грешки, разрешения и т.н.)',
  },
  images,
  technologies: ['apiDoc', 'JavaScript'],
  github: 'https://github.com/DidiStf/game-maze-api-doc',
  url: 'https://game-maze-api-doc-didistf.netlify.app/',
  isMobileApp: false,
  isDesignPrototype: false,
};
