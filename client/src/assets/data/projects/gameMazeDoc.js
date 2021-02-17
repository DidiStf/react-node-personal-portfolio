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
  description:
    'Documentation for the Game Maze REST API project built as part of my graduation projects.',
  images,
  technologies: ['apiDoc', 'JavaScript'],
  github: 'https://github.com/DidiStf/game-maze-api-doc',
  url: 'https://game-maze-api-doc-didistf.netlify.app/',
  isMobileApp: false,
  isDesignPrototype: false,
};
