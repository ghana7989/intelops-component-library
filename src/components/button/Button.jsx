import React from 'react';
import { clsxMerge } from '../../common/utils/classNameUtils';
import { buttonStyles } from './helpers';

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
