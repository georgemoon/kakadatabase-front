import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { swrParameters } from './configuration';

import { Header, HomePageHeader } from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index';

import AboutPage from './views/about';
import LegalPage from './views/legal';

import LearnPage from './views/learn/index';
import ThreatsPage from './views/learn/threats';
import ProtectingPage from './views/learn/protecting';

import BirdsPage from './views/birds/index';
import BirdDetailPage from './views/birds/detail';

import ObservationsPage from './views/observations/index';
import ObservationDetailPage from './views/observations/detail';

import ReportPage from './views/report/index';
import ReportSuccessPage from './views/report/success';

import NoMatchPage from './views/nomatch';

function App() {
  return (
    <SWRConfig value={swrParameters}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePageHeader} />
            <Route component={Header} />
          </Switch>
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />

              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/legal" component={LegalPage} />

              <Route exact path="/learn" component={LearnPage} />
              <Route exact path="/learn/threats" component={ThreatsPage} />
              <Route exact path="/learn/protecting" component={ProtectingPage} />

              <Route exact path="/birds" component={BirdsPage} />
              <Route exact path="/birds/:slug" component={BirdDetailPage} />

              <Route exact path="/observations" component={ObservationsPage} />
              <Route exact path="/observations/:slug" component={ObservationDetailPage} />

              <Route exact path="/report" component={ReportPage} />
              <Route exact path="/report/success" component={ReportSuccessPage} />
              <Route exact path="/report/success/:slug" component={ReportSuccessPage} />

              <Route component={NoMatchPage} />
            </Switch>
          </main>
          <Route component={Footer} />
        </div>
      </Router>
    </SWRConfig>
  );
}

export default App;
