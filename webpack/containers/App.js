import React from 'react';
import { Link } from 'react-router';


const App = ({ children }) => (
  <div>
    <header>
    	<nav>
    	  <div className="nav-wrapper blue accent-1" style={{paddingLeft: "20px"}}>
    	    <a href="#" className="brand-logo"><Link to={'/dashboard/1'}>Personal Budget</Link></a>
    	    <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Link to={'/dashboard/1'}>Dashboard</Link>
    	      <Link to={'/budgets/1'}>Budgets</Link>
    	      <Link to={'/bills/1'}>Bills</Link>
    	      <Link to={'/'}>Logout</Link>
    	    </ul>
    	  </div>
    	</nav>
    </header>
    <main>
      { children }
    </main>
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
          © 2016 Copyright Matt ,Brant & Associates
        </div>
      </div>
    </footer>
  </div>
)


export default App;



