/* import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AddClient from './components/AddClient';
import AddContract from './components/AddContract';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route path="/add-client" component={AddClient} />
            <Route path="/add-contract" component={AddContract} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
 */

import React from 'react';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
