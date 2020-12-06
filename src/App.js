import { Provider } from 'react-redux';
import store from './redux/store';

import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Pages
const Dashboard = React.lazy(() => import('./views/Dashboard'));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Dashboard" render={props => <Dashboard {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
