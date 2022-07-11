import Pages from '../../show/pages';
import * as Paths from './paths';

const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH
};

const Project = {
  element: Pages.Project,
  path: Paths.PROJECT_PATH
};

const routes = [Home, Project];

export default routes;
