import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AddClient from './components/addClient/AddClient';
import AddContract from './components/addContract/AddContract';
import ContractList from './components/contracts/ContractList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<ContractList />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/add-contract" element={<AddContract />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
