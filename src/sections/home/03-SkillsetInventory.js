

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
      // backgroundColor="#9f9e98"
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
        <div>
          <p className="text-center text-uppercase">
            <code>checking power levels...</code>
          </p>
        </div>
        <div className="pb-5" />
        <Row className="pb-4 pb-lg-5 mb-lg-5">
          <Col xs={12} md>
            <Skill percentage={95}>Javascript</Skill>
            <Skill percentage={98}>React + Redux</Skill>
            <Skill percentage={97}>Node.js</Skill>
            <Skill percentage={80}>Ruby On Rails</Skill>
            <Skill percentage={90}>D3.js</Skill>
          </Col>
          <Col xs={12} md>
            <Skill percentage={95}>Git version control</Skill>
            <Skill percentage={87}>React Native</Skill>
            <Skill percentage={82}>Mocha + Jest Unit Testing</Skill>
            <Skill percentage={65}>AWS + Heroku Server Admin</Skill>
            <Skill percentage={90}>CI + CD Pipeline Config</Skill>
          </Col>
        </Row>
      </Container>
    </ScrollSection>
  );
};

export default SectionSkills;
