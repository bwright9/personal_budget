import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import BudgetPage from './components/BudgetPage'

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={Login} />
    	<Route path="/dashboard/:userId" component={Dashboard} />
<<<<<<< HEAD
=======
    	<Route path="/budgets/:userId" component={BudgetPage} />
>>>>>>> 585e564f666676ffb5db6ccd7ef3acdd2ee9acbf
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

