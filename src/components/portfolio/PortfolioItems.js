
import React, { useState } from 'react';

import portfolioItems from '../../portfolio-items';

import PortfolioItem from './PortfolioItem';

import './Portfolio.style.scss';

const PortfolioItems = () => {
  const [isShowingLast, setIsShowingLast] = useState(false);
  const portfolioItemsFirst = portfolioItems.slice(0, 4);
  const portfolioItemsLast = portfolioItems.slice(4);
  return (
    <div className="portfolio-items d-flex flex-column pb-5">
      {portfolioItemsFirst.map((portfolioItem, index) => (
        <PortfolioItem
          key={index}
          index={index}
          portfolioItem={portfolioItem}
        />
      ))}
      {(portfolioItemsLast && portfolioItemsLast.length) ? (
        <div className="text-center">
          <button
            className="btn btn-light see-more-work"
            onClick={(ev) => {
              ev.preventDefault();
              setIsShowingLast(true);
            }}
          >
            See More Work
          </button>
        </div>
      ) : null}
      {(isShowingLast && portfolioItemsLast && portfolioItemsLast.length) ? (
        portfolioItemsLast.map((portfolioItem, index) => (
          <PortfolioItem
            key={index}
            index={index + portfolioItemsFirst.length}
            portfolioItem={portfolioItem}
          />
        ))
      ) : null}
    </div>
  );
};

export default PortfolioItems;
