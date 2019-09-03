
import React from 'react';
import cx from 'classnames';

import PageSection from '../components/common/PageSection';
import PageSectionInner from '../components/common/PageSectionInner';
import DynamicBackground from '../components/home/DynamicBackground';
import { Row, Col } from '../components/grid';

const PageHome = () => (
  <div className="page-home">
    <PageSection>
      <PageSectionInner>
        <DynamicBackground />

        <Row>
          <Col xs={12} md className="d-flex align-items-center">
            <h4 className="color-md-white text-left mx-auto my-4">
              hi there,<br />my name is
            </h4>
          </Col>
          <Col xs={12} md />
        </Row>

        {/* This <div> just groups the following <Row>s as one flex item */}
        <div>
          <Row>
            <Col xs={12} md>
              <h1
                className={cx([
                  'position-relative',
                  'text-md-right',
                  'color-blue-dark',
                  'color-md-white',
                ])}
              >Don</h1>
            </Col>
            <Col xs={12} md>
              <h1
                className={cx([
                  'position-relative',
                  'text-md-left',
                  'color-blue-dark',
                ])}
              >Townsend</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md>
              <h3
                className={cx([
                  'position-relative',
                  'text-md-right',
                  'color-blue-dark',
                  'color-md-white',
                ])}
              >
                Full-Stack
              </h3>
            </Col>
            <Col xs={12} md>
              <h3
                className={cx([
                  'position-relative',
                  'text-md-left',
                  'color-blue-dark',
                ])}
              >
                Web Developer
              </h3>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xs={12} md />
          <Col xs={12} md className="d-flex align-items-center">
            <h6 className="color-dark-blue text-left mx-auto my-4">
              {/* These <br>s add extra space so that the main content is centered on the page. */}
              <br />
              I'm a programmer who specializes in quality code.
              <br/>
            </h6>
          </Col>
        </Row>

      </PageSectionInner>
    </PageSection>
  </div>
);

export default PageHome;
