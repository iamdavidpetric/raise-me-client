import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { updateProps } from 'process/redux/transientSlice';
import { Button, ProgressBar, TextField } from 'show/components';

const GoalStep = ({ nextStep, previousStep }) => {
  const goal = useSelector(state => state.transient.goal);
  const dispatch = useDispatch();

  const setGoal = e =>
    dispatch(
      updateProps({
        goal:
          e.target.value < 0
            ? Math.abs(e.target.value)
            : e.target.value > 999999
            ? 999999
            : e.target.value
      })
    );

  return (
    <div className='mt-20 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Set your project goal
        </div>
        <div className='flex justify-center h-64'>
          <TextField
            required
            type='number'
            value={goal}
            className='flex rounded-2xl mt-2 items-center text-center w-36'
            onChange={e => setGoal(e)}
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!goal}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={40} color='bg-primary-600' />
      </div>
    </div>
  );
};

GoalStep.defaultProps = {
  nextStep: () => {},
  previousStep: () => {}
};

GoalStep.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
};

export default GoalStep;
