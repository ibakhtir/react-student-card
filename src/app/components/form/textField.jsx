import React from "react";

const TextField = ({ type, label, name, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="col-md-4 mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
