import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AddClient.css';

function AddClient() {
  const [clientData, setClientData] = useState({ name: '', email: '' });
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
    validateInputs();
  }, [clientData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const validateInputs = () => {
    const { name, email } = clientData;
    const validName = name.trim() !== '';
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidInputs(validName && validEmail);
  };

  const addClient = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/clients',
        clientData
      );
      console.log('Client added successfully:', response.data);
      setClientData({ name: '', email: '' });
      setShowModal(true);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <div className="add-client-container">
      <h2 className="titleClient">Add New Client</h2>
      <form>
        <div className="input-group-client">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={clientData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group-client">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={clientData.email}
            onChange={handleChange}
          />
        </div>
        <button
          className="btnsubmit"
          onClick={addClient}
          disabled={!validInputs}
        >
          Add Client
        </button>
      </form>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            ref={modalRef}
            onClick={e => e.stopPropagation()}
          >
            <span
              className="close-modal"
              onClick={() => setShowModal(false)}
            ></span>
            <p>Client successfully added!</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddClient;
