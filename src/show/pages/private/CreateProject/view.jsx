import PropTypes from 'prop-types';
import StepWizard from 'react-step-wizard';

import { mock } from 'process/helpers';

import {
  CategoryStep,
  DeadlineStep,
  DescriptionStep,
  FeeStep,
  GoalStep,
  ImagesStep,
  PublishStep,
  StatementStep,
  TeamMembersStep,
  TitleStep
} from './Subviews';

const CreateProject = ({ createProject, transient }) => {
  const createNewProject = e => {
    e?.preventDefault();
    createProject(transient);
  };
  return (
    <div className='h-full w-full'>
      <StepWizard>
        <CategoryStep />
        <TitleStep />
        <DescriptionStep />
        <GoalStep />
        <FeeStep />
        <DeadlineStep />
        <StatementStep />
        <ImagesStep />
        <TeamMembersStep />
        <PublishStep createNewProject={createNewProject} />
      </StepWizard>
    </div>
  );
};

CreateProject.defaultProps = {
  createProject: mock,
  transient: {}
};

CreateProject.propTypes = {
  createProject: PropTypes.func,
  transient: PropTypes.object
};

export default CreateProject;
