import { useEffect } from 'react';
import StepWizard from 'react-step-wizard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';
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

const EditProject = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedProject = useSelector(state => state.projects.selectedProject);
  const transient = useSelector(state => state.transient);

  const patchProject = e => {
    e?.preventDefault();
    dispatch(editProject(transient));
  };

  useEffect(() => {
    dispatch(getProject({ id }));
    dispatch(updateProps({ ...selectedProject }));
  }, [dispatch, id, selectedProject]);

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

export default EditProject;
