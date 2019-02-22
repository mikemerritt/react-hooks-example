import React from 'react';
import { Router } from '@reach/router';

import Dashboard from './modules/Dashboard';

const App = () => (
  <Router>
    <Dashboard path="/" />
  </Router>
);

export default App;
