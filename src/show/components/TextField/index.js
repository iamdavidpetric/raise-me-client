const TextField = ({ className, onChange, placeholder, value }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default TextField;
