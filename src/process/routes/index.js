import * as Paths from './paths';
import Pages from '../../show/pages';

const CreateProject = {
  element: Pages.CreateProject,
  path: Paths.CREATE_PROJECT_PATH
};

const Explore = {
  element: Pages.Explore,
  path: Paths.EXPLORE_PATH
};

const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH
};

const Project = {
  element: Pages.Project,
  path: Paths.PROJECT_PATH
};

const routes = [CreateProject, Explore, Home, Project];

export default routes;
