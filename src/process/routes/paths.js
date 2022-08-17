const CREATE_PROJECT_PATH = '/create-project';
const EDIT_PROJECT_PATH = '/edit-project/:id';
const EXPLORE_PATH = '/explore';
const HOME_PATH = '/';
const MY_PROJECTS_PATH = 'my-projects';
const PROJECT_PATH = '/project/:id';

const privatePaths = {
  CREATE_PROJECT_PATH,
  EDIT_PROJECT_PATH,
  MY_PROJECTS_PATH
};

const publicPaths = {
  EXPLORE_PATH,
  HOME_PATH,
  PROJECT_PATH
};

const paths = { public: publicPaths, private: privatePaths };

export default paths;
