const StyledInput = ({ type, name, placeholder, value, onChange, className }) => {
  const props = {
    type,
    name,
    placeholder,
    value,
    onChange,
    className: `w-full py-3 px-2 rounded shadow-lg focus:outline-none focus:shadow-outline 
                border border-gray-300 ${className} ${type === "textarea" ? "h-full" : ""}`,
  };

  return <div>{type === "textarea" ? <textarea {...props} /> : <input {...props} />}</div>;
};

const Input = ({ type, name, placeholder, value, onChange, className }) => {
  return <StyledInput type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={className} />;
};

export default Input;
