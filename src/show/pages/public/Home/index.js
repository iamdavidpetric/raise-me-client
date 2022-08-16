import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, ProgressBar } from 'show/components';
import { PROJECT_PATH } from 'process/routes/paths';
import {
  getFeaturedProject,
  getMostInvested,
  getQuickInfo
} from 'process/redux/projectSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { quickInfo, mostInvested, featuredProject } = useSelector(
    state => state.projects
  );

  useEffect(() => {
    dispatch(getFeaturedProject());
    dispatch(getMostInvested());
    dispatch(getQuickInfo());
  }, [dispatch]);

  return (
    <div className='bg-primary-600 flex flex-col h-full w-full'>
      <div className='bg-white'>
        <div className='bg-white flex items-center justify-between w-full h-24 text-4xl'>
          <div className='w-1/4 flex flex-col items-center justify-start border-r-4'>
            {quickInfo?.total_projects_count}
            <div className='text-sm'>projects funded</div>
          </div>
          <div className='w-1/4 flex flex-col items-center justify-center'>
            {quickInfo?.total_ammount_invested}$
            <div className='text-sm'>towards creative work</div>
          </div>
          <div className='w-1/4 flex flex-col items-center justify-end border-l-4'>
            {quickInfo?.total_investors_count}
            <div className='text-sm'>pledges</div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div
          onClick={() => navigate(PROJECT_PATH.replace(':id', featuredProject.id))}
          className='flex flex-col w-1/3 h-128 mt-5 mr-2 cursor-pointer'>
          <div className='h-112 ml-5'>
            {featuredProject?.images &&
              featuredProject?.images.length &&
              featuredProject?.images[0] && (
                <img
                  src={featuredProject?.images[0]}
                  alt='main'
                  className='w-full h-full object-cover rounded-t-lg'
                />
              )}
          </div>
          {mostInvested?.length > 0 ? (
            <div className='bg-white h-full ml-5 rounded-b-lg text-gray-500 text-lg text-center'>
              <div>{featuredProject?.name}</div>
              <div className='flex items-center justify-center px-5'>
                <ProgressBar
                  color='bg-primary-600'
                  percentage={featuredProject.achieved_goal_percentage}
                />
              </div>
              <div className='flex justify-center mt-1 mb-2'>
                <Button
                  variant='outline'
                  label={`${featuredProject.fee}$`}
                  disabled={featuredProject.achieved_goal_percentage >= 100}
                />
              </div>
            </div>
          ) : (
            <div className='flex w-full h-full mx-96 text-center justify-center text-2xl text-gray-500'>
              There are currently no projects to show
            </div>
          )}
        </div>

        <div className='w-full mr-5 mt-5'>
          {mostInvested?.map((project, index) => (
            <div
              onClick={() => navigate(PROJECT_PATH.replace(':id', project.id))}
              className='mb-2 flex flex-col content-start cursor-pointer'
              key={project.id}
              id={project.id}>
              <Card
                reversed={index > 1}
                src={project?.images && project?.images[0]}
                title={project?.name}
                price={`${project.fee}$`}
                percentage={project.achieved_goal_percentage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
