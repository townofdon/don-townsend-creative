
import React from 'react';
import cx from 'classnames';

import { urlLinkedIn, urlResume, urlEmail, urlGitHub, urlSource } from '../../globals/urls';

import DecoLeft from '../decoration/DecoLeft';
import Link from '../portfolio/Link';

import './ContactPanel.style.scss';

const ContactPanel = ({
  isShowing = false,
  setIsShowing = () => {},
}) => {
  return (
    <div className={cx('contact-panel d-flex align-items-center justify-content-center color-black', {
      showing: isShowing,
    })}>
      <div
        className="close"
        onClick={(ev) => {
          ev.preventDefault();
          setIsShowing(false);
        }}
      >
        <i class="fas fa-times"></i>
      </div>
      <div className="text-left">

        <div className="py-3" />

        <h5 className="mb-5">
          <strong>
            Don Townsend
          </strong>
          <span className="px-4">
            &bull;
          </span>
          Contact
        </h5>

        <div className="py-4" />

        <p className="mb-4">
          <Link className="btn btn-light" href={urlEmail}>
            <i className="icon-envelope"></i>
            &nbsp;
            donald.k.townsend@gmail.com
          </Link>
        </p>

        <p className="mb-4">
          <Link className="btn btn-light" href={urlLinkedIn}>
            <i className="fab fa-linkedin-in"></i>
            &nbsp;
            View LinkedIn Profile
          </Link>
        </p>

        <p className="mb-4">
          <Link className="btn btn-light" href={urlGitHub}>
            <i className="icon-github"></i>
            &nbsp;
            View GitHub Profile
          </Link>
        </p>

        <p className="mb-5">
          <Link className="btn btn-light" href={urlResume}>
            <i className="fas fa-user-astronaut"></i>
            &nbsp;
            Download Resume
          </Link>
        </p>

        <p className="pt-3">
          <Link className="btn btn-dark color-white" href={urlSource}>
            <strong>
              <i className="icon-space-invaders"></i>
              &nbsp;
              VIEW THE SOURCE CODE
              &nbsp;
              <i className="icon-tools"></i>
            </strong>
          </Link>
        </p>

      </div>
      <DecoLeft />
    </div>
  );
};

export default ContactPanel;
