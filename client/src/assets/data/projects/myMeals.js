import { LOCALES } from '../../translations/constants';
import { importAll } from '../../../utils/importAllScreenshots';

const rawImages = importAll(
  require.context(
    '../../screenshots/my-meals',
    false,
    /\.(jpg)$/ // (png|jpe?g|svg)
  )
);

const images = Object.values(rawImages).map((v) => v.default);

export const myMeals = {
  name: 'My Meals',
  description: {
    [LOCALES.ENGLISH]:
      'Small mobile application developed in React-Native that allows you to check the available meal recipes from different meal categories with the option to apply some filters, check the meal details (ingredients and steps) and include or exclude it from your favorite meals list. The user can also check out your favorite meals. The app uses Redux for the state management, multiple types of navigation and a hard-coded mocked database.',
    [LOCALES.FRENCH]:
      "Petite application mobile développée en React-Native qui permet de consulter des recettes de cuisine parmi plusiuers catégories avec la possibilité d'appliquer des filtres, de consulter les détails de la recette (ingrédients et étapes) et de l'inclure ou de l'exclure de la liste des plats préférés. L'utilisateur peut aussi consulter cette liste de plats préférés. L'application utilise Redux pour la gestion de l'état, plusieurs type de navigation et une base de données JSON simulée",
    [LOCALES.SPANISH]:
      'Una aplicación móvil bastante pequeña desarrollada en React-Native que permite consultar la recetas culinarias entre varias categorías con la posibilidad de aplicar filtros, consultar los detalles de la receta (ingredientes y etapas) incluso añadirle o quitarle de la lista de los platos fevoritos. El usuario puede también consultar esta lista de rеcetas preferidas. La aplicación utiliza Redux para la gestión del estado, varios tipos de navigación así que una base de datos JSON simulada.',
    [LOCALES.BULGARIAN]:
      'Малка мобилна апликация разработена с React-Native, която дава достъп до кулинарни рецепти от различни категории с възможност да се прилагат филтри, да се преглеждат детайлите за всяка рецепта (съставки и стъпки) включително и да добавят и премахват рецепти от списъка с любими ястия. Потребителите могат съшо така да преглеждат този списък по всяко време. Приложението използва Redux за управление на състоянието, различни видове навифация, както и симулирана JSON база данни.',
  },
  images,
  technologies: ['React-Native', 'Redux', 'JavaScript'],
  github: 'https://github.com/DidiStf/react-native-meals-app',
  isMobileApp: true,
  isDesignPrototype: false,
};
