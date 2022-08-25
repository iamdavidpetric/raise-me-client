import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { mock } from 'process/helpers';
import StepWizard from 'react-step-wizard';
import { useParams } from 'react-router-dom';

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
} from '../CreateProject/Subviews';

const EditProject = ({
  editProject,
  getProject,
  selectedProject,
  transient,
  updateProps
}) => {
  const { id } = useParams();

  const patchProject = e => {
    e?.preventDefault();
    editProject(transient);
  };

  useEffect(() => {
    getProject({ id });
    updateProps({ ...selectedProject });
  }, [getProject, id, selectedProject, updateProps]);

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
        <PublishStep createNewProject={patchProject} />
      </StepWizard>
    </div>
  );
};

EditProject.defaultProps = {
  editProject: mock,
  getProject: mock,
  selectedProject: mock,
  transient: {},
  updateProps: mock
};

EditProject.propTypes = {
  editProject: PropTypes.func,
  getProject: PropTypes.func,
  createProject: PropTypes.func,
  transient: PropTypes.object,
  updateProps: PropTypes.func
};

export default EditProject;
