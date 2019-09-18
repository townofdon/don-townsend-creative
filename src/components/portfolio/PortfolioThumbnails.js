
import React from 'react';

import portfolioItems from '../../portfolio-items';

const PortfolioThumbnails = ({
  setSelectedItem,
}) => {
  return (
    <div>
      {portfolioItems.map(portfolioItem => (
        <div
          key={portfolioItem.id}
          onClick={(ev) => {
            ev.preventDefault();
            setSelectedItem(portfolioItem.id);
          }}
        >
          {portfolioItem.name}
        </div>
      ))}
    </div>
  );
};

export default PortfolioThumbnails;
