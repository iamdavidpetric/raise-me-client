import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, ProgressBar } from '../../../components';

const Explore = () => {
  const [projectCard, setProjectCard] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v1/projects?category=${selectedCategory}`)
      .then(res => setProjectCard(res.data))
      .catch(err => err);
  }, [selectedCategory]);

  const categories = [
    'garden',
    'house',
    'tech',
    'cars',
    'office',
    'audio',
    'backpacks',
    'clothes'
  ];

  return (
    <div className='h-full w-full mt-10'>
      <div className='flex justify-center items-center bg-white h-12'>
        {categories.map((category, index) => (
          <div
            onClick={() =>
              selectedCategory === category
                ? setSelectedCategory('')
                : setSelectedCategory(category)
            }
            className={
              selectedCategory === category
                ? 'bg-primary-50 text-white mx-1 rounded-full px-2 transition-all duration-300 cursor-pointer'
                : 'border-2 border-primary-50 rounded-full mx-1 px-2 text-primary-50 transition-all duration-300 cursor-pointer'
            }
            key={index}>
            {category}
          </div>
        ))}
      </div>
      {projectCard.length > 0 ? (
        <div className='grid grid-cols-3'>
          {projectCard.map((project, index) => (
            <div
              onClick={() => navigate('/project/' + project.id)}
              className='rounded-lg h-96 mt-5 ml-5 mr-5 cursor-pointer'
              key={index}>
              <div className='bg-primary-600 rounded-lg border shadow-md'>
                <div className='relative'>
                  <img
                    src={project.images[0]}
                    alt='main'
                    className='object-cover h-72 w-full'
                  />
                  <div className='flex items-center bg-green-500 w-14 h-14 rounded-full absolute -top-5 -right-6'>
                    <Button
                      label={`${project.fee}$`}
                      className='flex items-center justify-center w-16 h-16 text-white hover:text-green-900'
                    />
                  </div>
                </div>
                <div className='ml-3 mb-2 text-2xl text-white'>
                  {project.name}
                </div>
                <div className='flex items-center w-full justify-center px-5 pb-4'>
                  <ProgressBar percentage={project.achieved_goal_percentage} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex text-center justify-center text-2xl text-gray-500'>
          There are currently no projects in this category
        </div>
      )}
    </div>
  );
};
export default Explore;
