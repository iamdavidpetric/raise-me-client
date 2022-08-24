import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { mock } from 'process/helpers';
import StepWizard from 'react-step-wizard';
import { useParams } from 'react-router-dom';

import { editProject, getProject } from 'process/slices/projectSlice';

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

const EditProject = ({ selectedProject, transient, updateProps }) => {
  const { id } = useParams();

  const patchProject = e => {
    e?.preventDefault();
    editProject(transient);
  };

  useEffect(() => {
    getProject({ id });
    updateProps({ ...selectedProject });
  }, [id, updateProps, selectedProject]);

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
  selectedProject: mock,
  updateProps: mock,
  transient: {}
};

EditProject.propTypes = {
  createProject: PropTypes.func,
  updateProps: PropTypes.func,
  transient: PropTypes.object
};

export default EditProject;
