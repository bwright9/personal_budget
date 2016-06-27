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
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <p className="grey-text text-lighten-4"></p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright Text
            </div>
          </div>
        </footer>
      </div>
)


export default App;



