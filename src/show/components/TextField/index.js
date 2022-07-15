const TextField = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='placeholder-gray-500 flex text-end justify-end transition-all duration-300 border border-white hover:border-primary-100 outline-none hover:px-3 w-64 h-8 rounded-full mr-5'
      />
    </div>
  );
};

export default TextField;
