import React from 'react';
import { clsxMerge } from '../../common/utils/classNameUtils';
import { buttonStyles } from './helpers';
import PropTypes from 'prop-types';
export default function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}) {
  return (
    <button
      className={clsxMerge(
        buttonStyles({ buttonType, size, rounded, spacing }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  rounded: PropTypes.bool,
  label: PropTypes.string,
  rightIcon: PropTypes.node,
  spacing: PropTypes.oneOf(['compact', 'normal', 'spacious']),
  leftIcon: PropTypes.node,
};
