const Button = ({ className, color, onClick, children, size }) => {
  const buttonColor = {
    primary: 'bg-primary-500 text-primary-500'
  };

  return (
    <button
      className={`${buttonColor[color]} hover:text-white px-2 rounded ${className}`}
      onClick={onClick}>
      {children}
      {size}
    </button>
  );
};

export default Button;
