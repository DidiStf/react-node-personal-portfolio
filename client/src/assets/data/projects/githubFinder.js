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
  description:
    'React application that allows you to find GitHub profiles, get basic information (such as username, avatar, bio, website, followers, following, public repos, etc.) and the five more recent repositories for a specific user and go to his full GitHub page. Uses Github API and React Context for the state management.',
  images,
  technologies: ['React', 'JavaScript', 'Css', 'Github API'],
  github: 'https://github.com/DidiStf/react-github-finder',
  url: 'https://github-finder-didistf.netlify.com',
  isMobileApp: false,
  isDesignPrototype: false,
};
