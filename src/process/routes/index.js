import Pages from 'show/pages';

import Paths from 'process/routes/paths';

const CreateProject = {
  element: Pages.CreateProject,
  path: Paths.private.CREATE_PROJECT_PATH
};

const EditProject = {
  element: Pages.EditProject,
  path: Paths.private.EDIT_PROJECT_PATH
};

const Explore = {
  element: Pages.Explore,
  path: Paths.public.EXPLORE_PATH
};

const Home = {
  element: Pages.Home,
  path: Paths.public.HOME_PATH
};

const MyProjects = {
  element: Pages.MyProjects,
  path: Paths.private.MY_PROJECTS_PATH
};
const Project = {
  element: Pages.Project,
  path: Paths.public.PROJECT_PATH
};

const publicRoutes = [Explore, Home, Project];
const privateRoutes = [CreateProject, EditProject, MyProjects];

export { publicRoutes, privateRoutes };
