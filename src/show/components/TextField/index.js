const TextField = ({ className, onChange, placeholder, value }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`flex transition-all duration-300 ${className}`}
      />
    </div>
  );
};

export default TextField;
