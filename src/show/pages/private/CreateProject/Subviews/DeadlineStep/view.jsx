import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { mock } from 'process/helpers';
import { Button, ProgressBar } from 'show/components';

import 'react-datepicker/dist/react-datepicker.css';

const DeadlineStep = ({ deadline, nextStep, previousStep, updateTransientProps }) => {
  return (
    <div className='mt-18 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Set project deadline
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center h-full mt-2 w-40 text-gray-500 text-2xl border rounded-full border-gray-500 px-4'>
            <ReactDatePicker
              required
              className='flex justify-center text-center w-full '
              selected={deadline ? new Date(deadline) : new Date()}
              onChange={deadline => updateTransientProps({ deadline: deadline })}
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              withPortal
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between cursor-pointe mt-52'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!deadline}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={60} color='bg-primary-600' />
      </div>
    </div>
  );
};

DeadlineStep.defaultProps = {
  deadline: new Date(),
  nextStep: mock,
  previousStep: mock,
  updateTransientProps: mock
};

DeadlineStep.propTypes = {
  deadline: PropTypes.instanceOf(Date),
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  updateTransientProps: PropTypes.func
};

export default DeadlineStep;
