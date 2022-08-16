import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { Button, ProgressBar, TextField } from 'show/components';

const StatementStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-36 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Enter your 6 word statement
      </div>
      <div className='h-64'>
        <TextField
          value={project?.statement}
          className='rounded-2xl mt-2 items-center text-center'
          onChange={e => setProject({ ...project, statement: e.target.value })}
        />
      </div>
      <div className='flex mt-20 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!project?.statement}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={70} color='bg-primary-600' />
      </div>
    </div>
  );
};

export default StatementStep;
