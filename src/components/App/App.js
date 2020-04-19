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
import NotFound from '../NotFound/NotFound';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Good from '../Good/Good';
import { connect } from 'react-redux';
const servicesStub = require(`./services-stub.json`);
const spiresStub = require(`./spires-stub.json`);

const App = props => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <ErrorBoundary>
              <Welcome />
            </ErrorBoundary>
          </Route>
          <Route path="/about-us">
            <ErrorBoundary>
              <AboutUs />
            </ErrorBoundary>
          </Route>
          <Route path="/spares">
            < ErrorBoundary >
              <List items={spiresStub} />
            </ErrorBoundary>
          </Route>
          <Route path="/services">
            <ErrorBoundary>
              <List items={servicesStub} />
            </ErrorBoundary>
          </Route>
          <Route path="/services/:id">
            <ErrorBoundary>
              <Good />
            </ErrorBoundary>
          </Route>
          <Route path="/spares/:id">
            <ErrorBoundary>
              <Good />
            </ErrorBoundary>
          </Route>
          <Route path="*">
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

const mapStateToProps = state => ({
  good: state.goodReducer.good
})

export default connect(mapStateToProps)(App);
