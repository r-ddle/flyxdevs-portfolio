import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  name,
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  hasError = false,
  className = '',
  inputClassName = '', // For more specific control over the input element itself
  label,
  errorText,
  required,
  ...props
}) => {
  const baseInputStyles =
    'block w-full h-10 px-3 py-2 text-base text-neutral-900 bg-white border border-neutral-300 rounded-md shadow-sm';

  const focusStyles =
    'focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50';
    // Design spec: border-color: $color-primary-500; box-shadow: 0 0 0 $focus-ring-width $focus-ring-color;
    // Using ring for consistency with Button. Adjusted ring-opacity-50.

  const hoverStyles = 'hover:border-neutral-500';

  const errorStateStyles =
    'border-error-500 text-error-500 placeholder-error-500/70';

  const errorFocusStyles =
    'focus:border-error-500 focus:ring-error-500 focus:ring-opacity-50';
    // Design spec: border-color: $color-error-500; box-shadow: 0 0 0 $focus-ring-width rgba($color-error-500, 0.5);

  const disabledStyles = 'disabled:bg-neutral-200 disabled:text-neutral-500 disabled:cursor-not-allowed';

  // Determine the ID for associating label and error messages
  const inputId = id || name;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
          {required && <span className="text-error-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          ${baseInputStyles}
          ${hoverStyles}
          ${hasError ? errorStateStyles : ''}
          ${hasError ? errorFocusStyles : focusStyles}
          ${disabledStyles}
          ${inputClassName}
        `}
        aria-invalid={hasError}
        aria-describedby={hasError && errorText ? \`\${inputId}-error\` : undefined}
        {...props}
      />
      {hasError && errorText && (
        <p id={\`\${inputId}-error\`} className="mt-1 text-sm text-error-500">
          {errorText}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  className: PropTypes.string, // For styling the wrapper div
  inputClassName: PropTypes.string, // For styling the input element itself
  label: PropTypes.string,
  errorText: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
