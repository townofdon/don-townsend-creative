import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { hideSplashScreen } from './utils/main';
// import disableScrolling from './utils/scroll/disable-scrolling';
import routes from './routes';

import MainScrollCapture from './containers/scroll/MainScrollCapture';
import ControlState from './containers/control/ControlState';

import './scss/main.scss';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    // a hack to prevent page "jumping" to last-scrolled position on
    // page refresh.
    // see: https://stackoverflow.com/questions/7035331/prevent-automatic-browser-scroll-on-refresh
    window.onbeforeunload = function(){ window.scrollTo(0,0); }
    window.scrollTo(0, 0);
    // disable scrolling until splash screen is hidden
    // disableScrolling();
    hideSplashScreen();
    // we want to prevent rendering child components
    // until the main app is initialized because positioning
    // is dependent upon the window.scrollY being at 0.
    setIsInitialized(true);
  }, [setIsInitialized]);
  return (
    <Router>
      <MainScrollCapture>
        <ControlState>
          <div className="App">
            {isInitialized ? (
              routes.map((route, index) => route.component ? (
                <Route key={index} path={route.path} exact component={route.component} />
              ) : null)
            ) : null}
          </div>
        </ControlState>
      </MainScrollCapture>
    </Router>
  );
}

export default App;
