import PropTypes from 'prop-types';

import { Button, ProgressBar } from '../../components';

const Card = ({ percentage, price, reversed, src, title }) => {
  const ifReversed = reversed ? 'flex-row' : 'flex-row-reverse';
  const reversedMargin = reversed ? 'mr-2' : 'ml-2';
  const disabledCard = percentage >= 100 ? 'bg-white opacity-75' : '';

  return (
    <div className='flex flex-col w-full h-32 rounded-lg mx-2'>
      <div className={`flex flex-row w-full h-full ${ifReversed}`}>
        <div className={`w-full rounded-lg ${reversedMargin}`}>
          <img
            src={src}
            alt='Backpack'
            className='w-full h-full object-center object-cover rounded-lg'
          />
        </div>

        <div
          className={`w-full h-full rounded-lg bg-white text-center flex flex-col justify-center ${disabledCard}`}>
          <div>{title}</div>
          <div className='flex items-center justify-center mt-2'>
            <Button
              variant='outline'
              label={price}
              disabled={percentage >= 100}
            />
          </div>

          <div className='flex items-center justify-center mt-3 px-5'>
            <ProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  percentage: '',
  price: '',
  reversed: false,
  src: '',
  title: ''
};

Card.propTypes = {
  percentage: PropTypes.number,
  price: PropTypes.string,
  reversed: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string
};

export default Card;
