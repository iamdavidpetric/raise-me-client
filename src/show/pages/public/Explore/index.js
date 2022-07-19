import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import categories from '../../../../process/constants';
import { PROJECT_PATH } from '../../../../process/routes/paths';
import { Button, ProgressBar, TextField } from '../../../components';

const Explore = () => {
  const [search, setSearch] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();

  const toggleSelectedCategoryStyle = category =>
    selectedCategory === category
      ? 'bg-primary-50 text-white'
      : 'border border-primary-50 text-primary-50';

  const toggleSelectedCategory = category =>
    selectedCategory === category
      ? setSelectedCategory('')
      : setSelectedCategory(category);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/v1/projects?category=${selectedCategory}&search=${search}`
      )
      .then(res => setProjects(res.data))
      .catch(err => err);
  }, [selectedCategory, search]);

  return (
    <div className='h-full w-full mt-2'>
      <div className='flex items-end justify-end'>
        <TextField
          placeholder='Search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='placeholder-gray-500 text-end justify-end border border-white w-64 h-8 px-2 mr-5 rounded-full hover:border-primary-100 outline-none hover:px-1'
        />
      </div>
      <div className='flex justify-center items-center bg-white h-12'>
        {categories.map((category, index) => (
          <div
            onClick={() => toggleSelectedCategory(category)}
            className={`rounded-full mx-1 px-2 transition-all duration-300 cursor-pointer
              ${toggleSelectedCategoryStyle(category)}`}
            key={index}>
            {category}
          </div>
        ))}
      </div>
      {projects.length > 0 ? (
        <div className='grid grid-cols-3'>
          {projects.map((project, index) => (
            <div
              onClick={() => navigate(PROJECT_PATH.replace(':id', project.id))}
              className='rounded-lg h-96 mt-5 ml-5 mr-5 cursor-pointer'
              key={index}>
              <div className='bg-primary-600 rounded-lg border shadow-md'>
                <div className='relative'>
                  <img
                    src={project.images[0]}
                    alt='main'
                    className='object-cover rounded-t-lg h-72 w-full'
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
