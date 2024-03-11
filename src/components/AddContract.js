import React, { useState } from 'react';
import axios from 'axios';

function AddContract() {
  const [contractData, setContractData] = useState({
    contractName: '',
    client: '',
    startDate: '',
    duration: '',
    comments: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setContractData({ ...contractData, [name]: value });
  };

  const addContract = async () => {
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
    } catch (error) {
      console.error('Error adding contract:', error);
    }
  };

  return (
    <div>
      <h2>Add New Contract</h2>
      <form onSubmit={addContract}>
        <label>Contract Name:</label>
        <input
          type="text"
          name="contractName"
          value={contractData.contractName}
          onChange={handleChange}
        />
        <label>Client:</label>
        <input
          type="text"
          name="client"
          value={contractData.client}
          onChange={handleChange}
        />
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={contractData.startDate}
          onChange={handleChange}
        />
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={contractData.duration}
          onChange={handleChange}
        />
        <label>Comments:</label>
        <textarea
          name="comments"
          value={contractData.comments}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Contract</button>
      </form>
    </div>
  );
}

export default AddContract;
