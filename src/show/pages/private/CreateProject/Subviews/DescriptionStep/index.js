import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { Button, ProgressBar, TextField } from '../../../../../components';

const DescriptionStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-20 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Describe your project
      </div>
      <div>
        <TextField
          required
          area={true}
          value={project?.description}
          className='flex items-start rounded-2xl mt-2 text-start h-72'
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
        />
      </div>
      <div className='flex mt-28 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!project?.description}
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

export default DescriptionStep;
