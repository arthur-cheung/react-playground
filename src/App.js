import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './components';

const About = () => <section><p>This is about</p></section>
const App = () => (
  <section>
    <h1>Hello World</h1>
    <header>
      <ul>
        {
          routes.map(route => <li key={`${route.key}_link`}><a href={route.path}>{route.label}</a></li>)
        }
      </ul>
    </header>
    <Router>
      <div>
        {routes.map(route => <Route exact key={route.key} path={route.path} component={route.component} />)}
      </div>
    </Router>
  </section>
);

export default App;