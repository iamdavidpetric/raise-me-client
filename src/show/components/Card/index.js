import { Button, ProgressBar } from '../../components';

const Card = ({ percentage, price, reversed, src, title }) => {
  const ifReversed = reversed ? 'flex-row' : 'flex-row-reverse';
  const ifImageMargin = reversed ? 'mr-2' : 'ml-2';
  const ifTextMargin = reversed ? 'ml-2' : 'ml-0';

  return (
    <div className='flex flex-col w-full h-full rounded-lg ml-2 mr-5'>
      <div className={`flex flex-row w-full h-full ${ifReversed}`}>
        <div className='w-full rounded-lg '>
          <img
            src={src}
            alt='Backpack'
            className={`w-full h-full object-center object-cover rounded-lg ${ifImageMargin}`}
          />
        </div>

        <div
          className={`w-full rounded-lg bg-white text-center flex flex-col justify-center ${ifTextMargin} `}>
          <div>{title}</div>
          <div className='flex items-center justify-center w-1/9 mt-2'>
            <Button
              className='border-2 rounded-full border-primary-50 text-primary-50 hover:border-white hover:bg-primary-50 hover:text-white'
              label={price}
            />
          </div>
          <div className='flex items-center justify-center mt-3'>
            <ProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
