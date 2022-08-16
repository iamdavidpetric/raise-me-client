import { BsArrowBarLeft } from 'react-icons/bs';

import { ProgressBar, Button } from 'show/components';

const PublishStep = ({ createNewProject, previousStep }) => {
  return (
    <div className='mt-18 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Ready to publish?
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center h-full mt-2 w-40  text-2xl rounded-full'>
            <Button
              onClick={e => createNewProject(e)}
              variant='outline'
              label='Yes, raise it!'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-52'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={100} color='bg-primary-600' />
      </div>
    </div>
  );
};

export default PublishStep;
