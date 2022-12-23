import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { mock } from 'process/helpers';
import { Button, ProgressBar, TextField } from 'show/components';

const StudentIDStep = ({ nextStep, previousStep }) => {
  const [studentID, setStudentID] = useState('');

  const studentsIdValid = ['11111', '22222', '33333', '44444'];

  return (
    <div className='mt-20 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Enter your student id
        </div>
        <div className='flex justify-center h-64'>
          <TextField
            required
            value={studentID}
            className='flex rounded-2xl mt-2 items-center text-center w-36'
            onChange={e => setStudentID(e.target.value)}
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
          disabled={!studentsIdValid?.includes(studentID)}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={95} color='bg-primary-600' />
      </div>
    </div>
  );
};

StudentIDStep.defaultProps = {
  nextStep: mock,
  previousStep: mock,
  updateTransientProps: mock
};

StudentIDStep.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  updateTransientProps: PropTypes.func
};

export default StudentIDStep;
