import PropTypes from 'prop-types';

const Button = ({
  className,
  iconLeft,
  iconRight,
  label,
  onClick,
  variant
}) => {
  const buttonColor = {
    primary: 'text-primary hover:text-primary-700',
    secondary: 'text-white hover:text-secondary-200',
    outline:
      'border-2 rounded-full border-primary-50 text-primary-50 hover:border-white hover:bg-primary-50 hover:text-white',
    'invert-outline':
      'border-2 rounded-full border-green-500 text-greeen-500 border-white bg-green-500 py-1 text-white hover:bg-green-600'
  };

  return (
    <button
      className={`flex px-2 transition-all duration-300 ${buttonColor[variant]} ${className}`}
      onClick={onClick}>
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  iconLeft: undefined,
  iconRight: undefined,
  label: '',
  onClick: () => {},
  variant: 'primary'
};

Button.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default Button;
