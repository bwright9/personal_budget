import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Dashboard from './components/Dashboard';
import Login from './components/Login'

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={Login} />
    	<Route path="/dashboard/:user_id" component={Dashboard} />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

