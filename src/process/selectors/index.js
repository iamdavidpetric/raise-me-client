const featuredProject = state => state.project.featuredProject;
const mostInvested = state => state?.project?.mostInvested || [];
const quickInfo = state => state.project.quickInfo;

export { featuredProject, mostInvested, quickInfo };
