import { LOCALES } from '../../translations/constants';
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
  description: {
    [LOCALES.ENGLISH]:
      "Interactive prototype of the Game Maze Mobile App built with AdobeXD as part of my graduation projects. The prototype shows the most of the features of the application, which is a gamers social media where users can find information about different games. They can also create a profile to comment and rate the video games or to contact the rest of the users (via internal message system). The admins can add and manage the video games' information and the super admins can delete the users' account and give or retrieve admin rights.",
    [LOCALES.FRENCH]:
      "Une maquette interactive de l'Application Mobile Game Maze, elaborée avec AdobeXD pour un de mes projets de fin d'études. La maquette montre la plupart des fonctionnalités de l'application, qui est une sorte de reaseau social pour les \"gamers\", où les utilisateurs peuvent trouver des informations sur différents jeux vidéo. Ils peuvent également créer un compte pour commenter et noter les jeux et pour contacter le reste des utilisateurs (à travers le système de messagerie interne). Les administrateurs peuvent gérer les informations concernant les jeux vidéo et les super administrateurs peuvent supprimer des comptes utilisateur ainsi qu'attribuer ou enlever des droits d'administrateur.",
    [LOCALES.SPANISH]:
      'Un modelo interactivo de la Aplicaión Móvil Game Maze, hecho con AdobeXD, que hace parte de uno de mis proyectos de fin de carrera. El modelo demuestra la mayoría de las funciones de la aplicación que es una especie de red soacial para "gamers", donde los usuarios pueden encontrar información sobre varios videojuegos. Tabién pueden crearse una cuenta para comentar y evaluar los juegos y para contactar el resto de los usuarios a través del sistema de mensajería interno. Los administradores pueden administrar los datos de los juegos y los super administradores pueden suprimir las cuentas así que dar o quitar derechos de administrador a los usuarios.',
    [LOCALES.BULGARIAN]:
      'Интерактивен модел на Mобилната Aпликация Game Maze, изработен с AdobeXD като част от дипломните ми проекти. Макетът демонстрира по-голямата част от функционалностите на апликацията, която е вид геймърска социална мрежа, където потребителите могат да намерят информация относно различни видео игри. Информацията за игрите, както и коментарите са публично достъпни, но потрбителите трябва да си създадат профил, за да могат да коментират и оценяват игрите, както и да се свързват с останалите потребители посредством системата за вътрешни съобщения. Администраторите могат да управляват съдържанието (информацията за игрите), а cупер aдминистраторите могат да премахват потребителски профили, както и да дават или отнемат администраторски права.',
  },
  images,
  technologies: ['AdobeXD'],
  demo:
    'https://drive.google.com/file/d/1GPXedchoJw-mUR8G9wcbZ9LwObZxhbyJ/view?usp=sharing',
  isMobileApp: true,
  isDesignPrototype: true,
};
