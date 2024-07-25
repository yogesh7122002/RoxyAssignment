import React, { useState, useEffect } from 'react';
import userService from '../../services/userService';
import storeService from '../../services/storeService';

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalStores, setTotalStores] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const usersResponse = await userService.getUsers();
        const storesResponse = await storeService.getStores();
        // Assuming getRatings API to get total number of ratings
        const ratingsResponse = await storeService.getRatings();

        setTotalUsers(usersResponse.data.users.length);
        setTotalStores(storesResponse.data.stores.length);
        setTotalRatings(ratingsResponse.data.totalRatings);
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <p>Total Users: {totalUsers}</p>
        <p>Total Stores: {totalStores}</p>
        <p>Total Ratings: {totalRatings}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
