
import React from 'react';
import cx from 'classnames';

const DashboardItem = ({
  onClick,
  href,
  children,
  className = '',
  classNameListItem = '',
  alt,
  download = false,
  title,
}) => (
  <li className={cx(classNameListItem)}>
    {(typeof onClick === 'function' || href) ? (
      <a
        onClick={(ev) => {
          ev.preventDefault();
          onClick(ev);
        }}
        className={cx(className)}
        href={href}
        alt={alt}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        title={title}
      >
        {children}
      </a>
    ) : (
      <span>
        {children}
      </span>
    )}
  </li>
);

export default DashboardItem;
