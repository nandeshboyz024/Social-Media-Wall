import React from 'react';
import MenuBar from './MenuBar';
import './Notification.css';
const Notification = () => {
  // Function to generate random notifications
  const generateNotifications = () => {
    const allUsers = ["Neel","Nitin","Mukesh","Sanjay","Leela","Bhansali","Jay","Shiva","Shankar"];
    const chooseRandomUser = () => {
      const randomIndex = Math.floor(Math.random() * allUsers.length);
      return allUsers[randomIndex];
    };
  
    const notifications = [];
    const types = ['liked', 'commented', 'shared'];
    // Generate 6 random notifications
    for (let i = 0; i < 6; i++) {
      const postId = Math.floor(Math.random() * 1000); // Generate random post ID
      const type = types[Math.floor(Math.random() * types.length)]; // Random notification type
      const randomUser = chooseRandomUser();
      const notification = `User ${randomUser} ${type} your post with ID ${postId}.`; // Example notification message
      notifications.push(notification);
    }

    return notifications;
  };

  const notifications = generateNotifications();

  return (
    <div>
      <MenuBar />
      <div className="notify-container">
      <h2>Notifications</h2>
        <ul className="notifications">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <span className="notification-text">{notification}</span>
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
};

export default Notification;
