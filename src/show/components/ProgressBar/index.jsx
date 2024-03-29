import PropTypes from 'prop-types';

const ProgressBar = ({ color, percentage }) => {
  return (
    <div className='w-full bg-gray-200 rounded-full'>
      <div
        className={`${color ? color : 'bg-primary-50'} 
       text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{
          width: percentage >= 100 ? `100%` : `${percentage}%`
        }}>
        {parseFloat(percentage >= 100 ? 100 : percentage?.toFixed(2))}%
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  color: '',
  percentage: undefined
};

ProgressBar.propTypes = {
  color: PropTypes.string,
  percentage: PropTypes.number
};

export default ProgressBar;
