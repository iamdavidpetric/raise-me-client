import PropTypes from 'prop-types';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { mock } from 'process/helpers';
import { Button, ProgressBar, TextField } from 'show/components';

const DescriptionStep = ({
  description,
  nextStep,
  previousStep,
  updateTransientProps
}) => {
  return (
    <div className='mt-20 px-20'>
      <div className='text-center text-3xl text-gray-500'>Describe your project</div>
      <div>
        <TextField
          required
          area={true}
          value={description}
          className='flex items-start rounded-2xl mt-2 text-start h-72'
          onChange={e => updateTransientProps({ description: e.target.value })}
        />
      </div>
      <div className='flex mt-28 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!description}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={30} color='bg-primary-600' />
      </div>
    </div>
  );
};

DescriptionStep.defaultProps = {
  description: '',
  nextStep: mock,
  previousStep: mock,
  updateTransientProps: mock
};

DescriptionStep.propTypes = {
  description: PropTypes.string,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  updateTransientProps: PropTypes.func
};

export default DescriptionStep;
