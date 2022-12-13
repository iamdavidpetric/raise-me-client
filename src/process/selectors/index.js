const quickInfo = state => state?.project?.quickInfo;
const featuredProject = state => state.project.featuredProject;
const mostInvested = state => state?.project?.mostInvested || [];

export { featuredProject, mostInvested, quickInfo };
