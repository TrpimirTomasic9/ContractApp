import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContractList.css';

function ContractList() {
  const [contracts, setContracts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/contracts')
      .then(response => {
        setContracts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contracts:', error);
      });
  }, []);

  const filteredContracts = contracts.filter(contract => {
    return (
      contract.contractName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.client.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="contract-list-container">
      <h2>All Contracts</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search by contract name or client"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredContracts.length > 0 ? (
        <div className="table-wrapper">
          <table className="contract-table">
            <thead>
              <tr>
                <th>Contract Name</th>
                <th>Client</th>
                <th>Start Date</th>
                <th>Duration</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {filteredContracts.map(contract => (
                <tr key={contract.id} className="contract-row">
                  <td>{contract.contractName}</td>
                  <td>{contract.client}</td>
                  <td>{contract.startDate}</td>
                  <td>{contract.duration}</td>
                  <td>
                    <div className="comments-cell">{contract.comments}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <table className="empty-table">
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Client</th>
              <th>Start Date</th>
              <th>Duration</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">No contracts found.</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContractList;
