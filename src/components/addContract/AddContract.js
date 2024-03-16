import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AddContract.css';

function AddContract() {
  const [contractData, setContractData] = useState({
    contractName: '',
    client: '',
    startDate: '',
    duration: '',
    comments: '',
  });

  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [validInputs, setValidInputs] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get('http://localhost:5000/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    }

    fetchClients();
  }, []);

  useEffect(() => {
    validateInputs();
  }, [contractData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setContractData({ ...contractData, [name]: value });
  };

  const validateInputs = () => {
    const { contractName, client, startDate, duration, comments } =
      contractData;
    const validContractName = contractName.trim() !== '';
    const validClient = client.trim() !== '';
    const validStartDate = startDate.trim() !== '';
    const validDuration = duration.trim() !== '';
    const validComment = comments.trim() !== '';

    setValidInputs(
      validContractName &&
        validClient &&
        validStartDate &&
        validDuration &&
        validComment
    );
  };

  const addContract = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/contracts',
        contractData
      );
      console.log('Contract added successfully:', response.data);
      setContractData({
        contractName: '',
        client: '',
        startDate: '',
        duration: '',
        comments: '',
      });
      setShowModal(true);
    } catch (error) {
      console.error('Error adding contract:', error);
    }
  };

  return (
    <div className="contract-container">
      <h2 className="titleContract">Add New Contract</h2>
      <form onSubmit={addContract}>
        <div className="input-group-contract">
          <label>Contract Name:</label>
          <input
            type="text"
            name="contractName"
            value={contractData.contractName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group-contract">
          <label>Client:</label>
          <select
            name="client"
            value={contractData.client}
            onChange={handleChange}
          >
            <option value="">Select Client</option>
            {clients.map(client => (
              <option key={client.id} value={client.name}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group-contract">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={contractData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="input-group-contract">
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={contractData.duration}
            onChange={handleChange}
          />
        </div>
        <div className="input-group-contract">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={contractData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="btn-div">
          <button className="btnsubmit" type="submit" disabled={!validInputs}>
            Add Contract
          </button>
        </div>
      </form>

      {showModal && (
        <div className="contract-modal" onClick={() => setShowModal(false)}>
          <div
            className="contract-modal-content"
            ref={modalRef}
            onClick={e => e.stopPropagation()}
          >
            <span
              className="contract-close-modal"
              onClick={() => setShowModal(false)}
            ></span>
            <p>Contract successfully added!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddContract;
