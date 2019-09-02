
import React from 'react';
import cx from 'classnames';

const Container = ({ fluid, children, className, ...restProps }) => {
  const containerClassName = cx({
    'container-fluid': fluid,
    container: !fluid,
  }, className);
  return (
    <div className={cx(containerClassName)} {...restProps}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: '',
  fluid: false,
};


export default Container;
