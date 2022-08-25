import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { mock } from 'process/helpers';
import { Button, ProgressBar, TextField } from 'show/components';

const ImagesStep = ({ nextStep, previousStep, transient, updateProps }) => {
  useEffect(() => {
    updateProps({ images: ['', '', '', '', '', '', '', ''] });
  }, [updateProps]);

  const setImage = (e, index) => {
    let newImages = [...transient.images];
    newImages[index] = e.target?.value;
    updateProps({ images: newImages });
  };

  return (
    <div className='mt-12 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Enter your project photos URL
      </div>
      <div className='h-full mt-6'>
        {transient?.images?.map((image, index) => (
          <TextField
            key={index}
            value={image}
            className='rounded-2xl mt-2 items-center text-center'
            onChange={e => setImage(e, index)}
          />
        ))}
      </div>
      <div className='flex mt-14 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!transient?.images?.filter(image => image.length > 0).length}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={80} color='bg-primary-600' />
      </div>
    </div>
  );
};

ImagesStep.defaultProps = {
  nextStep: mock,
  previousStep: mock,
  transient: {},
  updateProps: mock
};

ImagesStep.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  transient: PropTypes.object,
  updateProps: PropTypes.func
};

export default ImagesStep;
