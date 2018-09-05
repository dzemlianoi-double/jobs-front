import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};
const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <div>
        <input {...input} className="form-control" placeholder={placeholder} type={type} />
        {touched && ((error && <span className="text-danger"> {error} </span>))}
      </div>
    </div>
  );
};

renderField.propTypes = propTypes;

export default renderField;
