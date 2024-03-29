

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import Container from '../../components/grid/Container';
import DecoBottom from '../../components/decoration/DecoBottom';
import PortfolioItems from '../../components/portfolio/PortfolioItems';

import './04-Portfolio.style.scss';

const SectionPortfolio = () => {
  return (
    <ScrollSection
      id="portfolio"
      theme="silver"
      backgroundColor="transparent"
      className="section-portfolio-offset pb-4"
      classNameContent="w-100"
      viewHeight={1}
      before={(
        <div className="section-portfolio-offset-fill" />
      )}
      render={({
        isSectionInView,
        pctProgressSection,
      }) => {
        const isFixed = isSectionInView && pctProgressSection < 100;
        return (
          <div
            className={cx('section-portfolio color-bg-white color-black h-100')}
            style={{
              position: isFixed ? 'fixed' : 'relative',
            }}
          >
            <Container className="pt-5">
              <div className="pt-5" />
              <div className="pt-lg-5" />
              <h2 className="text-center text-uppercase letter-spacing-1 pb-5">
                Portfolio
              </h2>
              <PortfolioItems />
              <div className="pt-5" />
              <div className="pt-lg-5" />
            </Container>
            <DecoBottom />
          </div>
        );
      }}
    />
  );
};

export default SectionPortfolio;
