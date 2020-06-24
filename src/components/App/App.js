import React from 'react';
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
import { NotFound } from '../NotFound';
import { ErrorBoundary } from '../ErrorBoundary';
import { Good } from '../Good';
import { Auth } from '../Auth';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { Modal } from '../Modal';
import PropTypes from 'prop-types';
import { apiPath } from '../../tools/config'

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { InfoContainer } from '../InfoContainer';

const Account = React.lazy(() => import('../Account/Account'));

const App = ({ child }) => {
  return (
    <Router>
      <div className="App">
        <Header />
        { child ? <Modal /> : null }
        <Switch>
          <Route exact path="/">
            <ErrorBoundary>
              <Welcome />
            </ErrorBoundary>
          </Route>
          <Route exact path="/about-us">
            <ErrorBoundary>
              <AboutUs />
            </ErrorBoundary>
          </Route>
          <Route exact path="/spares">
            <ErrorBoundary >
              <List dataUrl={`${apiPath}/spares`} />
            </ErrorBoundary>
          </Route>
          <Route exact path="/services">
            <ErrorBoundary>
              <List dataUrl={`${apiPath}/services`} />
            </ErrorBoundary>
          </Route>
          <Route exact path="/account">
            <ErrorBoundary>
              <React.Suspense fallback={<InfoContainer><div>Loading...</div></InfoContainer>}>
                <Account />
              </React.Suspense>
            </ErrorBoundary>
          </Route>
          <Route exact path="/auth">
            <ErrorBoundary>
              <Auth />
            </ErrorBoundary>
          </Route>
          <Route path="/:type/:id">
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
        <ToastContainer
          limit={3}
        />
      </div>
    </Router>
  );
}

App.propTypes = {
  child: PropTypes.node
}

const mapState = state => ({
  child: state.other.modalChild
});

export default connect(mapState)(App);
