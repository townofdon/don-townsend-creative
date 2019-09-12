

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import Container from '../../components/grid/Container';
// import ScrollItem from '../../components/scroll/ScrollItem';
// import BlurItem from '../../components/scroll/BlurItem';

import './03-SkillsetInventory.style.scss';

const SectionSkills = () => {
  const dynamicClassName = pctProgressSection => {
    const baseClassName = 'color-white ease-in-out';
    if (pctProgressSection < 75) {
      return `${baseClassName} color-bg-black`;
    }
    if (pctProgressSection >= 75) {
      return `${baseClassName} color-bg-blue-light`;
    }
  }
  return (
    <ScrollSection
      id="skillset-inventory"
      theme="dark"
      className={dynamicClassName}
      classNameContent="w-100"
      viewHeight={2}
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
          <Container className={cx('section-skillset-inventory py-5')}>
            <h2 className="text-center text-uppercase letter-spacing-1">Skillset Inventory</h2>

            {/* use this: https://bl.ocks.org/sarahob/1e291c95c4169ddabb77bbd10b6a7ef7 */}
            {/* it's PERFECT. */}
          </Container>
        );
      }}
    />
  );
};

export default SectionSkills;
