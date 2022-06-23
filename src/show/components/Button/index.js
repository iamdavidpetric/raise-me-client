import PropTypes from 'prop-types';

const Button = ({
  className,
  variant,
  iconLeft,
  iconRight,
  label,
  onClick
}) => {
  const buttonColor = {
    primary: 'text-primary hover:text-primary-700',
    secondary: 'text-white hover:text-secondary-200'
  };

  return (
    <button
      className={`${buttonColor[variant]} ${className} flex px-2 rounded transition-all duration-300`}
      onClick={onClick}>
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
  onClick: () => {},
  label: ''
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any
};

export default Button;
