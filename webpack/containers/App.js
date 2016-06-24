import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
  	<nav>
  	   <div className="nav-wrapper">
  	     <a href="#" className="brand-logo">Personal Budget</a>
  	     <ul id="nav-mobile" className="right hide-on-med-and-down">
  	       <li><a href="sass.html">Profile</a></li>
  	       <li><a href="badges.html">Bills</a></li>
  	       <li><a href="collapsible.html">Budgets</a></li>
  	     </ul>
  	   </div>
  	 </nav>
    { children }
  </div>
  	
)

export default App;

