
import React from 'react';

const DashboardItem = ({
  onClick,
  href = '#',
  children,
}) => (
  <li className="dashboard-item">
    <a
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  </li>
);

export default DashboardItem;
