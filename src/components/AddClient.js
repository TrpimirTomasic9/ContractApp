import React, { useState } from 'react';
import axios from 'axios';

function AddClient() {
  const [clientData, setClientData] = useState({ name: '', email: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const addClient = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/clients',
        clientData
      );
      console.log('Client added successfully:', response.data);
      setClientData({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <div>
      <h2>Add New Client</h2>
      <form onSubmit={addClient}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={clientData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={clientData.email}
          onChange={handleChange}
        />
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default AddClient;
