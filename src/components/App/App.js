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
          <Route exact path="/spares">
            < ErrorBoundary >
              <List items={spiresStub} />
            </ErrorBoundary>
          </Route>
          <Route exact path="/services">
            <ErrorBoundary>
              <List items={servicesStub} />
            </ErrorBoundary>
          </Route>
          <Route path="/services/:id">
            <ErrorBoundary>
              <Good name="Back view mirrors"
                    price={200}
                    currency="usd"
                    _id="dsad12d21d443t"
                    description="2 mirror for audi q5, black color, without mirrors"
                    amount={20}
                    url_name="back-view-mirrors-audi-q5"
                    type="spire" />
            </ErrorBoundary>
          </Route>
          <Route path="/spares/:id">
            <ErrorBoundary>
              <Good {...props.good} />
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
