import PropTypes from 'prop-types';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { mock } from 'process/helpers';
import { Button, ProgressBar, TextField } from 'show/components';

const TitleStep = ({ name, nextStep, previousStep, updateProps }) => {
  return (
    <div className='mt-36 px-20'>
      <div className='text-center text-3xl text-gray-500'>Name your project</div>
      <div className='h-64'>
        <TextField
          required
          value={name}
          className='rounded-2xl mt-2 items-center text-center'
          onChange={e => updateProps({ name: e.target.value })}
        />
      </div>
      <div className='flex mt-20 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!name}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={20} color='bg-primary-600' />
      </div>
    </div>
  );
};

TitleStep.defaultProps = {
  nextStep: mock,
  previousStep: mock,
  updateProps: mock,
  name: ''
};

TitleStep.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  updateProps: PropTypes.func,
  name: PropTypes.string
};

export default TitleStep;
