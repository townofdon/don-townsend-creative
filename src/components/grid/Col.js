
import React from 'react';
import cx from 'classnames';

const Col = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}) => {
  const classes = [];

  const buildClassName = (key, value) => {
    const prefix = (key === 'xs')
      ? 'col'
      : `col-${key}`;
    if (typeof value === 'boolean') {
      return prefix;
    }
    const isNumericValue = !Number.isNaN(parseInt(value, 10));
    if (isNumericValue) {
      let sanitizedValue = parseInt(value, 10);
      if (sanitizedValue < 1) {
        sanitizedValue = 1;
      } else if (sanitizedValue > 12) {
        sanitizedValue = 12;
      }
      return `${prefix}-${sanitizedValue}`;
    }
    return `${prefix}-${value}`;
  };

  if (xs) {
    classes.push(buildClassName('xs', xs));
  }
  if (sm) {
    classes.push(buildClassName('sm', sm));
  }
  if (md) {
    classes.push(buildClassName('md', md));
  }
  if (lg) {
    classes.push(buildClassName('lg', lg));
  }
  if (xl) {
    classes.push(buildClassName('xl', xl));
  }

  return (
    <div className={cx(classes, className)} {...props}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  children: null,
  className: '',
  // default to xs size if no sizing specified
  xs: true,
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

export default Col;