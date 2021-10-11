
import React from 'react';

import portfolioItems from '../../portfolio-items';

import PortfolioItem from './PortfolioItem';

import './Portfolio.style.scss';

const PortfolioItems = () => {
  const portfolioItemsFirst = portfolioItems.slice(0, 4);
  return (
    <div className="portfolio-items d-flex flex-column pb-5">
      {portfolioItemsFirst.map((portfolioItem, index) => (
        <PortfolioItem
          key={index}
          index={index}
          portfolioItem={portfolioItem}
        />
      ))}
    </div>
  );
};

export default PortfolioItems;
