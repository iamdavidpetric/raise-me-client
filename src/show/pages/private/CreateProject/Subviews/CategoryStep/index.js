import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { mock } from 'process/helpers';
import { ProgressBar } from 'show/components';
import { categories } from 'process/constants';
import { updateProps } from 'process/redux/transientSlice';

const CategoryStep = ({ nextStep }) => {
  const dispatch = useDispatch();

  const setCategory = category => {
    nextStep();
    dispatch(updateProps({ category: category?.name }));
  };

  return (
    <div>
      <div className='mt-36 flex flex-col text-center text-3xl text-primary-600 '>
        Choose a category
      </div>
      <div className='mt-10 flex justify-evenly h-32'>
        {categories.map((category, index) => (
          <div
            onClick={() => setCategory(category)}
            className='cursor-pointer hover:scale-110 transition-all duration-300'
            key={index}>
            <div className='flex justify-evenly bg-white mt-5 text-primary-600'>
              {category?.icon}
            </div>
            <div className='text-center mt-2 text-gray-500'>{category?.name}</div>
          </div>
        ))}
      </div>
      <div className='mt-72 px-80'>
        <ProgressBar percentage={10} color='bg-primary-600' />
      </div>
    </div>
  );
};

CategoryStep.defaultProps = {
  nextStep: mock
};

CategoryStep.propTypes = {
  nextStep: PropTypes.func
};

export default CategoryStep;
