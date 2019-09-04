

import React, { useRef } from 'react';

import PageSection from '../../components/common/PageSection';
import PageSectionInner from '../../components/common/PageSectionInner';
import DynamicBackground from '../../components/home/DynamicBackground';
import { Row, Col } from '../../components/grid';

const SectionMain = () => {
  const refs = {
    mainTitle01: useRef(null),
    mainTitle02: useRef(null),
    mainTitle03: useRef(null),
    mainTitle04: useRef(null),
  };
  return (
    <PageSection>
      <div className="color-md-blue-dark position-relative">
        <h1
          ref={refs.mainTitle01}
          className="text-reset"
        >
          Don
        </h1>

        <h2
          ref={refs.mainTitle02}
          className="text-reset"
        >
          Townsend
        </h2>

        <h3
          ref={refs.mainTitle03}
          className="text-reset"
        >
          Full-Stack Web Developer
        </h3>

        <h4
          ref={refs.mainTitle04}
          className="text-reset"
        >
          Passionate about clean, performant, and intuitive code.
        </h4>
      </div>
    </PageSection>
  );
};

export default SectionMain;
