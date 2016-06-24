import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Profile from './components/Profile'
import Login from './components/Login'

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={Login} />
    	<Route path="/profile/:user_id" component={Profile} />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

