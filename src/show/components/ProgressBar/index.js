import PropTypes from 'prop-types';

const ProgressBar = ({ color, percentage }) => {
  return (
    <div className='w-3/4 bg-gray-200 rounded-full '>
      <div
        className={`${color ? color : 'bg-primary-50'} 
       text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  color: '',
  percentage: ''
};

ProgressBar.propTypes = {
  color: PropTypes.string,
  percentage: PropTypes.number
};

export default ProgressBar;
