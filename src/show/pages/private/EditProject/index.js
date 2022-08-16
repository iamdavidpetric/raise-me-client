import { useEffect } from 'react';
import StepWizard from 'react-step-wizard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { editProject, getProject, setSelectedProject } from 'process/redux/projectSlice';
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

  const { selectedProject } = useSelector(state => state.projects);

  const dispatch = useDispatch();

  const editProject = e => {
    e?.preventDefault();
    dispatch(editProject(selectedProject));
  };

  useEffect(() => {
    dispatch(getProject({ id }));
  }, [dispatch, id]);

  const setProject = payload => {
    dispatch(setSelectedProject(payload));
  };

  return (
    <div className='h-full w-full'>
      <StepWizard>
        <CategoryStep project={selectedProject} setProject={setProject} />
        <TitleStep project={selectedProject} setProject={setProject} />
        <DescriptionStep project={selectedProject} setProject={setProject} />
        <GoalStep project={selectedProject} setProject={setProject} />
        <FeeStep project={selectedProject} setProject={setProject} />
        {/* <DeadlineStep project={selectedProject} setProject={setProject} /> */}
        <StatementStep project={selectedProject} setProject={setProject} />
        <ImagesStep project={selectedProject} setProject={setProject} />
        <TeamMembersStep project={selectedProject} setProject={setProject} />
        <PublishStep
          project={selectedProject}
          setProject={setProject}
          createNewProject={editProject}
        />
      </StepWizard>
    </div>
  );
};

export default EditProject;
