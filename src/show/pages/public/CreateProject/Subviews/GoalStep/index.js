import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { Button, ProgressBar, TextField } from '../../../../../components';

const GoalStep = ({ nextStep, previousStep, project, setProject }) => {
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
            value={project.goal}
            className='flex rounded-2xl mt-2 items-center text-center w-36'
            onChange={e =>
              setProject({
                ...project,
                goal:
                  e.target.value < 0
                    ? Math.abs(e.target.value)
                    : e.target.value > 999999
                    ? 999999
                    : e.target.value
              })
            }
          />
        </div>
      </div>
      <div className='flex justify-between cursor-pointer'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!project.goal}
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

export default GoalStep;
