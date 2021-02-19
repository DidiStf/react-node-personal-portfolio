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
      'Detailed documentation for the Game Maze REST API built as part of my graduation projects.',
    [LOCALES.FRENCH]:
      "Documentation détaillée pour l'API REST Game Maze, élaborée pour un de mes porjets de fin d'études.",
    [LOCALES.SPANISH]:
      'Documentación detallada para la API REST Game Maze, hecha para uno de mis proyectos de fin de carrera.',
    [LOCALES.BULGARIAN]:
      'Подробна докумнетация за REST уеб приложението (API) Game Maze, изготвена като част от един от дипломните ми проекти.',
  },
  images,
  technologies: ['apiDoc', 'JavaScript'],
  github: 'https://github.com/DidiStf/game-maze-api-doc',
  url: 'https://game-maze-api-doc-didistf.netlify.app/',
  isMobileApp: false,
  isDesignPrototype: false,
};
