import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

import './scss/main.scss';

function App() {
  console.log(routes);
  return (
    <Router>
      <div className="App">
        {routes.map((route, index) => route.component ? (
          <Route key={index} path={route.path} exact component={route.component} />
        ) : null)}
        <footer className="App-footer p-4">
          The footer
        </footer>
      </div>
    </Router>
  );
}

export default App;
