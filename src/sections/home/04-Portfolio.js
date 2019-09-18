

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import Container from '../../components/grid/Container';
// import ScrollItem from '../../components/scroll/ScrollItem';
// import BlurItem from '../../components/scroll/BlurItem';

import './04-Portfolio.style.scss';

const SectionPortfolio = () => {
  return (
    <ScrollSection
      id="portfolio"
      theme="dark"
      backgroundColor="white"
      // theme="silver"
      // className={}
      classNameContent="w-100"
      viewHeight={1.5}
      scrollToOffset={200}
      render={({
        isSectionInView,
        pctProgressSection,
        width,
        height,
        winWidth,
        winHeight,
      }) => {
        // const scrollItemProps = {
        //   pctProgressStart: 100,
        //   pctProgressEnd: 190,
        //   pctProgressSection,
        //   sectionWidth: width,
        //   sectionHeight: height,
        //   winWidth,
        //   winHeight,
        // };
        return (
          <Container className={cx('section-portfolio color-black')}>
            <h2 className="text-center text-uppercase letter-spacing-1 pb-5">
              Portfolio
            </h2>
          </Container>
        );
      }}
    />
  );
};

export default SectionPortfolio;
