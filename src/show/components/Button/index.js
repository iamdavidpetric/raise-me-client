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
  label: '',
  iconLeft: undefined,
  iconRight: undefined
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
