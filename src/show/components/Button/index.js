import PropTypes from 'prop-types';

const Button = ({
  className,
  disabled,
  iconLeft,
  iconRight,
  label,
  onClick,
  variant
}) => {
  const buttonColor = {
    primary: disabled ? 'text-primary' : 'text-primary hover:text-primary-700',
    secondary: disabled ? 'text-white' : 'text-white hover:text-secondary-200',
    outline: disabled
      ? 'border-none rounded-full text-white'
      : 'border rounded-full border-primary-50 text-primary-50 hover:border-white hover:bg-primary-50 hover:text-white',
    'invert-outline': disabled
      ? 'border rounded-full border-green-300 text-greeen-300 border-white bg-green-300 py-1 text-white'
      : 'border rounded-full border-green-500 text-greeen-500 border-white bg-green-500 py-1 text-white hover:bg-green-600'
  };

  return (
    <button
      className={`flex px-2 transition-all duration-300 ${buttonColor[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  iconLeft: undefined,
  iconRight: undefined,
  label: '',
  onClick: () => {},
  variant: 'primary'
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default Button;
