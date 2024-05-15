import React, { useState } from 'react';
import Home from "./components/Home";
import Notification from "./components/Notification";
import Profile from "./components/Profile";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState({
      'Neel':[],
      'Nitin':[],
      'Mukesh':[],
      'Sanjay':[],
      'Leela':[],
      'Bhansali':[],
      'Jay':[],
      'Shiva':[],
      'Shankar':[]
  });
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home posts={posts} setPosts={setPosts} messages={messages} setMessages={setMessages}/>} />
          <Route path="/notification" element ={<Notification/> } />
          <Route path="/profile" element ={<Profile/> } />
        </Routes>
      </Router>
  );
}
export default App;
