import { useState } from 'react';
import { useDispatch } from 'react-redux';

import StepWizard from 'react-step-wizard';
import { createProjectAsync } from '../../../../process/redux/projectSlice';

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
  const [project, setProject] = useState({
    category: '',
    name: '',
    description: '',
    goal: undefined,
    fee: undefined,
    deadline: '',
    images: ['', '', '', '', '', '', '', ''],
    team_members: [{}, {}, {}, {}, {}, {}, {}],
    user_id: 1
  });

  const dispatch = useDispatch();

  const createNewProject = e => {
    e?.preventDefault();
    dispatch(createProjectAsync(project));
  };

  return (
    <div className='h-full w-full'>
      <StepWizard>
        <CategoryStep project={project} setProject={setProject} />
        <TitleStep project={project} setProject={setProject} />
        <DescriptionStep project={project} setProject={setProject} />
        <GoalStep project={project} setProject={setProject} />
        <FeeStep project={project} setProject={setProject} />
        <DeadlineStep project={project} setProject={setProject} />
        <StatementStep project={project} setProject={setProject} />
        <ImagesStep project={project} setProject={setProject} />
        <TeamMembersStep project={project} setProject={setProject} />
        <PublishStep
          project={project}
          setProject={setProject}
          createNewProject={createNewProject}
        />
      </StepWizard>
    </div>
  );
};

export default CreateProject;
