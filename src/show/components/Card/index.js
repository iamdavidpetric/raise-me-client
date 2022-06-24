import Button from '../Button';
import ProgressBar from '../ProgressBar';

const Card = ({ title, price, percentage, reversed, src }) => {
  return (
    <div className='flex flex-col w-full h-full rounded-lg ml-2 mr-5'>
      <div
        className={`flex flex-row w-full h-full ${
          reversed ? 'flex-row' : 'flex-row-reverse'
        }`}>
        <div className='w-full rounded-lg '>
          <img
            src={src}
            alt='Backpack'
            className={`w-full h-full object-center object-cover rounded-lg ${
              reversed ? 'mr-2' : 'ml-2'
            }`}
          />
        </div>
        <div
          className={`w-full rounded-lg bg-white text-center flex flex-col justify-center ${
            reversed ? 'ml-2' : 'ml-0'
          }`}>
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
