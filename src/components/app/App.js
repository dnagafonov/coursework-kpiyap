import React from 'react';
import './App.scss';
import Header from '../header/header';
import List from '../list/list';
import Footer from '../footer/footer';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

const servicesStub = require(`./services-stub.json`);
const spiresStub = require(`./spires-stub.json`);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" children={<div>Welcome!</div>} />
          <Route path="/about-us" children={<div>about us</div>} />
          <Route path="/spares" children={<List items={spiresStub} />} />
          <Route path="/services" children={<List items={servicesStub} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
