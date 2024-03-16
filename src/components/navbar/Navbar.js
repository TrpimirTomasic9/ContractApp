import React from 'react';
import './Navbar.css';
import homePng from './home.png';
import contractSvg from './add-contract.svg';
import clientSvg from './add-client.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="navbar-left">
          <div className="navbar-item">
            <Link to="/">
              <img className="home" src={homePng} alt="home" />
            </Link>
            <Link to="/">Home</Link>
          </div>
        </li>
        <li className="navbar-right">
          <div className="navbar-item">
            <Link to="/add-client">
              <img className="client" src={clientSvg} alt="client" />
            </Link>
            <Link to="/add-client">Add Client</Link>
          </div>
        </li>
        <li className="navbar-right">
          <div className="navbar-item">
            <Link to="/add-contract">
              <img className="contract" src={contractSvg} alt="contract" />
            </Link>
            <Link to="/add-contract">Add Contract</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
