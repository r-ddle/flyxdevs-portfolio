import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  variant = 'primary', // 'primary', 'secondary'
  size = 'base', // 'sm', 'base', 'lg' (maps to component-height)
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium focus:outline-none transition-all duration-150 ease-in-out';

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm', // $component-height-sm: 2rem; (32px)
    base: 'h-10 px-4 text-base', // $component-height-base: 2.5rem; (40px)
    lg: 'h-12 px-6 text-lg', // $component-height-lg: 3rem; (48px)
  };

  const variantStyles = {
    primary: `
      bg-primary-500 text-white
      hover:bg-primary-600
      active:bg-primary-700
      focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900
      disabled:bg-neutral-300 disabled:text-neutral-500
    `,
    secondary: `
      bg-transparent text-primary-500 border border-primary-500
      hover:bg-primary-100 hover:border-primary-600 hover:text-primary-600
      active:bg-primary-200
      focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900
      disabled:border-neutral-300 disabled:text-neutral-500 disabled:bg-transparent
    `,
    // Future: Add 'outline', 'ghost', 'link' variants if needed
  };

  // The design spec uses $border-radius-base (0.375rem = 6px) which is Tailwind's 'rounded-md'
  // And $focus-ring-width: 3px; $focus-ring-color: rgba($color-primary-500, 0.5);
  // Tailwind's default focus ring is often an outline. The spec uses box-shadow for focus.
  // The provided .button SCSS uses: box-shadow: 0 0 0 $focus-ring-width $focus-ring-color;
  // For Tailwind, this is better handled by ring utilities as configured in tailwind.config.js previously.
  // ring-2 (default from config was 3px), ring-primary-500/50 (opacity can be set in color definition)
  // Added focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900 for better visibility on different backgrounds.

  const borderRadius = 'rounded-md'; // $border-radius-base (6px)

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${borderRadius}
        ${disabled ? 'cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'base', 'lg']),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
