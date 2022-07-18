const TextField = ({ className, onChange, placeholder, value }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex transition-all duration-300 placeholder-gray-500 border-2 rounded-full px-2 ${className}`}
      />
    </div>
  );
};

export default TextField;
