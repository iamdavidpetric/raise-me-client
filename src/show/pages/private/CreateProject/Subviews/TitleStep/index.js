import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { updateProps } from 'process/redux/transientSlice';
import { Button, ProgressBar, TextField } from 'show/components';

const TitleStep = ({ nextStep, previousStep }) => {
  const name = useSelector(state => state.transient.name);
  const dispatch = useDispatch();

  return (
    <div className='mt-36 px-20'>
      <div className='text-center text-3xl text-gray-500'>Name your project</div>
      <div className='h-64'>
        <TextField
          required
          value={name}
          className='rounded-2xl mt-2 items-center text-center'
          onChange={e => dispatch(updateProps({ name: e.target.value }))}
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
  nextStep: () => {},
  previousStep: () => {}
};

TitleStep.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
};

export default TitleStep;
