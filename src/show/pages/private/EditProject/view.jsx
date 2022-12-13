import { useEffect } from 'react';
import PropTypes from 'prop-types';
import StepWizard from 'react-step-wizard';
import { useParams } from 'react-router-dom';

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
  TitleStep
} from '../CreateProject/Subviews';

const EditProject = ({
  editProject,
  getProject,
  selectedProject,
  transient,
  updateTransientProps
}) => {
  const { id } = useParams();

  const patchProject = e => {
    e?.preventDefault();
    editProject(transient);
  };

  useEffect(() => {
    getProject({ id });
    updateTransientProps({ ...selectedProject });
    // eslint-disable-next-line
  }, [getProject, id, updateTransientProps]);

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
  updateTransientProps: mock
};

EditProject.propTypes = {
  editProject: PropTypes.func,
  getProject: PropTypes.func,
  createProject: PropTypes.func,
  transient: PropTypes.object,
  updateTransientProps: PropTypes.func
};

export default EditProject;
