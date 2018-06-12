import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

console.log('Router', Router);

const Home = () => <section><p>This is home</p></section>;
const About = () => <section><p>This is about</p></section>
const App = () => (
  <section>
    <h1>Hello World</h1>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  </section>
);

export default App;