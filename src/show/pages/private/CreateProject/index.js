import axios from 'axios';
import { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { useNavigate } from 'react-router-dom';

import { PROJECT_PATH } from '../../../../process/routes/paths';
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
  const navigate = useNavigate();

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

  const createNewProject = e => {
    e?.preventDefault();
    const formData = new FormData();
    project.images.forEach(image => {
      if (image.length !== 0) {
        formData.append('images[]', image);
      }
    });
    formData.append('name', project.name);
    formData.append('description', project.description);
    formData.append('goal', project.goal);
    formData.append('fee', project.fee);
    formData.append('deadline', project.deadline);
    project.team_members.forEach(member => {
      if (Object.entries(member).length) {
        formData.append('team_members_attributes[][name]', member.name);
        formData.append(
          'team_members_attributes[][avatar_url]',
          member.avatar_url
        );
      }
    });
    formData.append('category', project.category);
    formData.append('statement', project.statement);
    formData.append('user_id', project.user_id);

    axios
      .post('http://localhost:3000/v1/projects/', formData)
      .then(res => navigate(PROJECT_PATH.replace(':id', res.data.id)))
      .catch(err => console.log(err));
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
