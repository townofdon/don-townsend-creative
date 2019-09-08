

import React, { useRef } from 'react';

import ScrollSection from '../../components/scroll/ScrollSection';

const SectionMain = () => {
  const refs = {
    mainTitle01: useRef(null),
    mainTitle02: useRef(null),
    mainTitle03: useRef(null),
    mainTitle04: useRef(null),
  };
  return (
    <ScrollSection
      className="color-bg-black color-md-black d-flex align-items-center justify-content-center"
      backgroundColor="#fefefe"
      backgroundImage="/img/bg-star-port-faded.jpg"
      backgroundFixed
      viewHeight={2}
      render={({
        isSectionInView,
        pctProgressSection,
      }) => (
        <>
          {/* <h2
            ref={refs.mainTitle01}
            className="text-reset"
          >
            Don
          </h2>

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
          </h4> */}
        </>
      )}
    />
  );
};

export default SectionMain;
