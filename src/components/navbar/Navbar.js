/* import React from 'react';
import './navbar.css';
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
            <img className="home" src={homePng} alt="home" />
            <Link href="/">Home</Link>
          </div>
        </li>
        <li className="navbar-right">
          <div className="navbar-item">
            <img className="client" src={clientSvg} alt="client" />
            <Link href="../add-client">Add Client</Link>
          </div>
        </li>
        <li className="navbar-right">
          <div className="navbar-item">
            <img className="contract" src={contractSvg} alt="contract" />
            <Link href="../add-contract">Add Contract</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; */

import React from 'react';
import './navbar.css';
import homePng from './home.png';
import contractSvg from './add-contract.svg';
import clientSvg from './add-client.svg';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="navbar-left">
          <div className="navbar-item">
            <img className="home" src={homePng} alt="home" />
            <a href="/">Home</a>
          </div>
        </li>
        <li className="navbar-right">
          <div className="navbar-item">
            <img className="client" src={clientSvg} alt="client" />
            <a href="../add-client">Add Client</a>
          </div>
        </li>
        <li className="navbar-right">
          <div className="navbar-item">
            <img className="contract" src={contractSvg} alt="contract" />
            <a href="../add-contract">Add Contract</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
