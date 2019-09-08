import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { hideSplashScreen } from './utils/main';
import routes from './routes';

import MainScrollCapture from './containers/scroll/MainScrollCapture';
import ControlState from './containers/control/ControlState';

import './scss/main.scss';

function App() {
  React.useEffect(() => {
    hideSplashScreen();
  }, []);
  return (
    <Router>
      <MainScrollCapture>
        <ControlState>
          <div className="App">
            {routes.map((route, index) => route.component ? (
              <Route key={index} path={route.path} exact component={route.component} />
            ) : null)}
          </div>
        </ControlState>
      </MainScrollCapture>
    </Router>
  );
}

export default App;
