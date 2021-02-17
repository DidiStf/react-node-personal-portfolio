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
  description:
    'REST API that was part of one of my graduation projects called Game Maze.',
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
