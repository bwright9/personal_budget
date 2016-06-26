import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
  	<nav>
  	   <div className="nav-wrapper blue accent-1" style={{paddingLeft: "20px"}}>
  	     <a href="#" className="brand-logo">Personal Budget</a>
  	     <ul id="nav-mobile" className="right hide-on-med-and-down">
  	       <li><a href="sass.html">Profile</a></li>
  	       <li><a href="badges.html">Bills</a></li>
  	       <Link to={'/'}>Logout</Link>
  	     </ul>
  	   </div>
  	 </nav>
    { children }
  </div>
  	
)

export default App;

