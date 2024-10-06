
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <p>Name: {user ? user.name : 'Demo User'}</p>
      <p>Email: {user ? user.email : 'demo@example.com'}</p>
    </div>
  );
};

export default Profile;
