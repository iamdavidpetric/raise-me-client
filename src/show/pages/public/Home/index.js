import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, ProgressBar } from '../../../components';

const Home = () => {
  const [featuredProject, setFeaturedProject] = useState({});
  const [mostInvested, setMostInvested] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v1/todays_project/null`)
      .then(res => setFeaturedProject(res.data))
      .catch(err => err);

    axios
      .get(`http://localhost:3000/v1/todays_project/`)
      .then(res => setMostInvested(res.data))
      .catch(err => err);
  }, []);

  return (
    <div className='bg-primary-50 flex flex-col h-full w-full'>
      <div className='bg-white'>
        <div className='bg-white flex items-center justify-between w-full h-24 text-4xl'>
          <div className='w-1/4 flex flex-col items-center justify-start border-r-4'>
            222,301
            <div className='text-sm'>projects funded</div>
          </div>
          <div className='w-1/4 flex flex-col items-center justify-center'>
            $6,103,555,942
            <div className='text-sm'>towards creative work</div>
          </div>
          <div className='w-1/4 flex flex-col items-center justify-end border-l-4'>
            68,319,962
            <div className='text-sm'>pledges</div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div
          onClick={() => navigate('/project/' + featuredProject.id)}
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
          <div className='bg-white h-full ml-5 rounded-b-lg text-gray-500 text-lg text-center'>
            <div>{featuredProject.name}</div>
            <div className='flex items-center justify-center px-5'>
              <ProgressBar
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
        </div>
        <div className='w-full mr-5 mt-5'>
          {mostInvested.map((project, index) => (
            <div
              onClick={() => navigate('/project/' + project.id)}
              className={`mb-2 flex flex-col content-start cursor-pointer `}
              key={project.id}>
              <Card
                reversed={index > 1}
                src={project?.images && project?.images[0]}
                title={project.name}
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
