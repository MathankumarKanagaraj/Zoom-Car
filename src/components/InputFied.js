import React from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className={className}> 
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
        required
      />
    </div>
  );
};

export default InputField;
