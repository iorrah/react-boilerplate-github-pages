/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { HashRouter, Route, withRouter, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App({ existingHistory }) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <HashRouter
        basename="/react-boilerplate-github-pages"
        history={existingHistory}
      >
        <Switch>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route path="/features" component={withRouter(FeaturePage)} />
          <Route path="" component={withRouter(NotFoundPage)} />
        </Switch>
      </HashRouter>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  existingHistory: PropTypes.object,
};

export default App;
