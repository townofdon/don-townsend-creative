
import React from 'react';

import ScrollContext from '../contexts/ScrollContext';

function withScroll(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <ScrollContext.Consumer>
          {(scrollProps) => (
            <WrappedComponent {...scrollProps} {...this.props} />
          )}
        </ScrollContext.Consumer>
      );
    }
  };
}

export default withScroll;
