import React, { useState, useEffect } from 'react';
import storeService from '../../services/storeService';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await storeService.getStores();
        setStores(response.data.stores);
      } catch (error) {
        console.error('Failed to fetch stores', error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Overall Ratings</th>
            <th>My Submitted Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stores.map(store => (
            <tr key={store.id}>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.rating}</td>
              <td>/* Display user's submitted rating */</td>
              <td>
                <button>Submit Rating</button>
                <button>Modify Rating</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreList;
