import StepWizard from 'react-step-wizard';
import { useDispatch, useSelector } from 'react-redux';

import { createProject } from 'process/redux/projectSlice';

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

const CreateProject = () => {
  const dispatch = useDispatch();
  const transient = useSelector(state => state.transient);

  const createNewProject = e => {
    e?.preventDefault();
    dispatch(createProject(transient));
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

export default CreateProject;
