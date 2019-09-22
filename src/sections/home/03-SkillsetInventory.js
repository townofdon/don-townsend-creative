

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import Container from '../../components/grid/Container';
import Row from '../../components/grid/Row';
import Col from '../../components/grid/Col';
import Skill from '../../components/skillset/Skill';
import DecoTop from '../../components/decoration/DecoTop';
import DecoBottom from '../../components/decoration/DecoBottom';

import './03-SkillsetInventory.style.scss';

const SectionSkills = () => {
  return (
    <ScrollSection
      id="skillset-inventory"
      theme="dark"
      backgroundColor="silver"
      className="section-skillset-inventory mb-3"
      classNameContent="w-100"
      viewHeight={1}
      scrollToOffset={200}
      before={(
        <DecoTop />
      )}
      after={(
        <DecoBottom />
      )}
    >
      <Container className={cx('section-skillset-inventory-content py-5')}>
        <div className="pb-5" />
        <h2 className="text-center text-uppercase letter-spacing-1 pb-5">
          Skillset Inventory
        </h2>
        <div className="pb-5" />
        <Row className="pb-4 pb-lg-5 mb-lg-5">
          <Col xs={12} md>
            <Skill percentage={90}>Javascript</Skill>
            <Skill percentage={98}>React</Skill>
            <Skill percentage={92}>Redux</Skill>
            <Skill percentage={97}>Node.js</Skill>
            <Skill percentage={80}>Ruby On Rails</Skill>
          </Col>
          <Col xs={12} md>
            <Skill percentage={95}>Git</Skill>
            <Skill percentage={82}>Mocha + Jest Unit Testing</Skill>
            <Skill percentage={81}>WordPress + PHP</Skill>
            <Skill percentage={65}>AWS + Heroku Server Admin</Skill>
            <Skill percentage={90}>HTML + CSS</Skill>
          </Col>
        </Row>
      </Container>
    </ScrollSection>
  );
};

export default SectionSkills;
