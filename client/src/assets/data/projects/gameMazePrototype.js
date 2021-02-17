import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/game-maze-prototype',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const gameMazePrototype = {
  name: 'Game Maze Design Prototype',
  description:
    "Interactive prototype for the Game Maze Mobile App built with AdobeXD as part of one of my graduation projects. The prototype shows the most of the features of the application which is a gamers social media where users can find information about different games. They can also create a profile to comment and rate the video games or to contact the rest of the users via internal message system. The admins can add and manage the video games information and the super admins can manage the users' account and give or retrieve admin rights.",
  images,
  technologies: ['AdobeXD'],
  demo:
    'https://drive.google.com/file/d/1GPXedchoJw-mUR8G9wcbZ9LwObZxhbyJ/view?usp=sharing',
  isMobileApp: true,
  isDesignPrototype: true,
};
