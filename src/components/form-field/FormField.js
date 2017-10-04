import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormField = ({type, disabled, placeholder, componentClass, children, label, meta: { touched, error, warning }, input}) =>
    <label>
      {label}
      <input
        {...input}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
      <div>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </label>;


FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.shape({
    placeholder: PropTypes.string,
  }),
  children: PropTypes.arrayOf(PropTypes.node),
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.string,
    warning: PropTypes.string
  })
};

export default FormField;

