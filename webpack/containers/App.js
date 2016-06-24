import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Link to="/user" />
    { children }
  </div>
)

export default App;

