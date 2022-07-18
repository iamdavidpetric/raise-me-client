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
        className={`flex transition-all duration-300 placeholder-gray-500 border rounded-full px-2 ${className}`}
      />
    </div>
  );
};

export default TextField;
