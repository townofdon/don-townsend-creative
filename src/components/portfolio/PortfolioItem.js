
import React from 'react';
import cx from 'classnames';

import { Row, Col } from '../grid';
import DecoRight from '../decoration/DecoRight';
import DecoLeft from '../decoration/DecoLeft';
import PortfolioAttribute from './PortfolioAttribute';
import Link from './Link';

const PortfolioItem = ({
  index,
  portfolioItem,
}) => {
  if (!portfolioItem) {
    return null;
  }

  const isEven = (index % 2) === 0;
  const isOdd = (index % 2) === 1;

  return (
    <div
      key={portfolioItem.id}
      className={cx('portfolio-item py-5 align-self-center', {
        even: isEven,
        odd: isOdd,
        'align-self-xl-start': isEven,
        'align-self-xl-end': isOdd,
      })}
    >
      <div className="portfolio-item-wrap d-inline-block position-relative">
        <div className="d-inline-block position-relative">
          <img
            src={portfolioItem.img}
            alt={portfolioItem.name}
            width={portfolioItem.width}
            height={portfolioItem.height}
          />
          {/* desktop */}
          <div className="titles d-none d-xl-flex flex-column align-items-center justify-content-center text-center">
            <Link className="fill-absolute" href={portfolioItem.url} />
            <h2>
              <Link href={portfolioItem.url}>
                {portfolioItem.name}
              </Link>
            </h2>
            <h5>
              <Link href={portfolioItem.url}>
                {portfolioItem.subHeading}
              </Link>
            </h5>
            <p className="m-0 text-muted"><small>[click to visit site]</small></p>
          </div>
        </div>
        {/* desktop */}
        <div className="info d-none d-xl-flex flex-column align-items-center justify-content-center">
          <div className="d-inline-block m-auto text-left">
            {(portfolioItem.attributes && portfolioItem.attributes.length) ? (
              portfolioItem.attributes.map((attribute, index) => (
                <div key={index}>
                  <PortfolioAttribute attribute={attribute} />
                </div>
              ))
            ) : null}
          </div>
          {isEven ? (
            <DecoRight />
          ) : null}
          {isOdd ? (
            <DecoLeft />
          ) : null}
        </div>
      </div>

      {/* mobile */}
      <div className="d-block d-xl-none">
        <h2 className="py-4">
          {portfolioItem.name}
        </h2>
        <Row>
          {(portfolioItem.attributes && portfolioItem.attributes.length) ? (
            portfolioItem.attributes.map((attribute, index) => (
              <Col key={index} xs={6}>
                <PortfolioAttribute attribute={attribute} />
              </Col>
            ))
          ) : null}
        </Row>
      </div>

    </div>
  );
}

export default PortfolioItem;
