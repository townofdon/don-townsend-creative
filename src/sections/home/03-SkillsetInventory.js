

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import Container from '../../components/grid/Container';
// import ScrollItem from '../../components/scroll/ScrollItem';
// import BlurItem from '../../components/scroll/BlurItem';
import Row from '../../components/grid/Row';
import Col from '../../components/grid/Col';
import Skill from '../../components/skillset/Skill';

import './03-SkillsetInventory.style.scss';

const SectionSkills = () => {
  const dynamicClassName = pctProgressSection => {
    const baseClassName = 'color-white ease-in-out';
    if (pctProgressSection < 50) {
      return `${baseClassName} color-bg-black`;
    }
    if (pctProgressSection >= 50) {
      return `${baseClassName} color-bg-blue-light`;
    }
  }
  return (
    <ScrollSection
      id="skillset-inventory"
      theme="dark"
      className={dynamicClassName}
      classNameContent="w-100"
      viewHeight={1}
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
          <Container className={cx('section-skillset-inventory py-5')}>
            <h2 className="text-center text-uppercase letter-spacing-1">Skillset Inventory</h2>
            <Row>
              <Col cx={12} md>
                <Skill percentage={90}>Javascript</Skill>
                <Skill percentage={98}>React</Skill>
                <Skill percentage={92}>Redux</Skill>
                <Skill percentage={97}>Node.js</Skill>
                <Skill percentage={80}>Ruby On Rails</Skill>
              </Col>
              <Col cx={12} md>
                <Skill percentage={95}>Git</Skill>
                <Skill percentage={82}>Mocha + Jest Unit Testing</Skill>
                <Skill percentage={81}>WordPress + PHP</Skill>
                <Skill percentage={65}>AWS + Heroku Server Admin</Skill>
                <Skill percentage={90}>HTML + CSS</Skill>
              </Col>
            </Row>
          </Container>
        );
      }}
    />
  );
};

export default SectionSkills;
