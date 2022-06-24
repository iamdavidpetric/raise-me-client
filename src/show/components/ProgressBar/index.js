const ProgressBar = ({ percentage, color }) => {
  return (
    <div className=' w-3/4  bg-gray-200 rounded-full dark:bg-gray-700'>
      <div
        className={`${
          color ? color : 'bg-primary-50'
        } bg-primary-50 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
