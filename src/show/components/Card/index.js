import PropTypes from 'prop-types';

import { Button, ProgressBar } from '../../components';

const Card = ({ percentage, price, reversed, src, title }) => {
  const ifReversed = reversed ? 'flex-row' : 'flex-row-reverse';
  const ifImageMargin = reversed ? 'mr-2' : 'ml-2';
  const ifTextMargin = reversed ? 'ml-2' : 'ml-0';

  return (
    <div className='flex flex-col w-full h-full rounded-lg ml-2 mr-5'>
      <div className={`flex flex-row w-full h-full ${ifReversed}`}>
        <div className='w-full rounded-lg'>
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
            <Button variant='outline' label={price} />
          </div>
          <div className='flex items-center justify-center mt-3'>
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
