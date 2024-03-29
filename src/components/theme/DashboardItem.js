
import React from 'react';
import cx from 'classnames';

const DashboardItem = ({
  onClick,
  href,
  children,
  className = '',
  classNameListItem = '',
  styleListItem,
  style,
  alt,
  download = false,
  setTooltip = () => {},
}) => (
  <li className={cx(classNameListItem)} style={styleListItem}>
    {(typeof onClick === 'function' || href) ? (
      <a
        onClick={(ev) => {
          if (typeof onClick === 'function') {
            ev.preventDefault();
            onClick(ev);
          }
        }}
        className={cx(className)}
        href={href}
        alt={alt}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        onMouseEnter={() => {
          if (alt) { setTooltip(alt); }
        }}
        onMouseLeave={() => {
          if (alt) { setTooltip(''); }
        }}
        style={style}
      >
        {children}
      </a>
    ) : (
      <span className={cx(className)} style={style}>
        {children}
      </span>
    )}
  </li>
);

export default DashboardItem;
