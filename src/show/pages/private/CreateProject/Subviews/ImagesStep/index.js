import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { Button, ProgressBar, TextField } from '../../../../../components';

const ImagesStep = ({ nextStep, previousStep, project, setProject }) => {
  const setImage = (e, index) => {
    let newImages = project.images;
    newImages[index] = e.target.value;
    setProject({ ...project, images: newImages });
  };

  return (
    <div className='mt-12 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Enter your project photos URL
      </div>
      <div className='h-full mt-6'>
        {project?.images?.map((image, index) => (
          <TextField
            key={index}
            value={image}
            className='rounded-2xl mt-2 items-center text-center'
            onChange={e => setImage(e, index)}
          />
        ))}
      </div>
      <div className='flex mt-14 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={!project?.images?.filter(image => image.length > 0).length}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={80} color='bg-primary-600' />
      </div>
    </div>
  );
};

export default ImagesStep;
