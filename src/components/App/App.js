import React from 'react';
import './App.scss';
import { Header } from '../Header';
import { List } from '../List';
import { Footer } from '../Footer';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import { Welcome } from '../Welcome';
import { AboutUs } from '../AboutUs';
const servicesStub = require(`./services-stub.json`);
const spiresStub = require(`./spires-stub.json`);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" children={<Welcome />} />
          <Route path="/about-us" children={<AboutUs />} />
          <Route path="/spares" children={<List items={spiresStub} />} />
          <Route path="/services" children={<List items={servicesStub} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
