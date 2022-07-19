import PropTypes from 'prop-types';

const TextField = ({
  className,
  onChange,
  placeholder,
  required,
  type,
  value
}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm focus:z-10 transition-all duration-300 ${className}`}
      />
    </div>
  );
};

TextField.defaultProps = {
  className: '',
  onChange: () => {},
  placeholder: '',
  required: true,
  type: 'text',
  value: ''
};

TextField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

export default TextField;
