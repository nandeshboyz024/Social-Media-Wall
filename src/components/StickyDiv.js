import React, { useState, useEffect } from 'react';
import './StickyDiv.css';

const StickyDiv = ({ messages, setMessages }) => {
  const [collapsed, setCollapsed] = useState(true); 
  const [searchQuery, setSearchQuery] = useState('');
  const [allUsers] = useState([
    'Neel',
    'Nitin',
    'Mukesh',
    'Sanjay',
    'Leela',
    'Bhansali',
    'Jay',
    'Shiva',
    'Shankar'
  ]);
  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [currentUser,setCurrentUser]=useState('Neel');
  const [text,setText]=useState('');
  useEffect(() => {
    setFilteredUsers(allUsers);
  }, [allUsers]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed); 
  };


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); 
    filterUsers(event.target.value);
  };

  const filterUsers = (query) => {
    const filtered = allUsers.filter((user) =>
      user.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered); 
  };
  const handleUserClick = (user) => {
    setCurrentUser(user); 
  };
  const handleMessageSend = () => {
    if (text.trim() !== '') {
        const updatedMessages = messages;
        updatedMessages[currentUser].push(text);
        setMessages(updatedMessages);
        setText('');
    }
  };
  return (
    <div className='sticky-div'>
      <button className="collapse-button action-btn"  onClick={toggleCollapse}>
        {collapsed ? 'Message' : 'Collapse'}
      </button>
      <div className={`content ${collapsed ? 'collapsed' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-4" style={{ textAlign: 'center' }}>
              <div style={{ marginTop: '4px' }}>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              {filteredUsers.map((user, index) => (
                <div key={index} style={{ textAlign: 'center', padding: '5px', marginTop: '4px', background: 'black' }}>
                  <button style={{ border: 'none', background: 'none', color: 'white', width:'100%' }} onClick={() => handleUserClick(user)}>{user}</button>
                </div>
              ))}
            </div>
            <div className='col-8' style={{ borderLeft: '2px solid black',background:'gray',height:'395px'}}>
                <div style={{ textAlign: 'center', padding: '5px', marginTop: '4px', background: 'black', color:'white' }}>
                    {currentUser}
                </div>
                <div className='template' style={{ maxHeight: 'calc(100% - 80px)', overflowY: 'auto' }}>
                <div>
                    {messages[currentUser] && messages[currentUser].slice().map((message,Index) => (
                        <p key={Index} style={{color:'wheat'}}>{message}</p>
                    ))}
                </div>
                </div>
                <div>
                <div className="add-message">
                    <div className='row' style={{margin:'0'}}>
                        <div className="col-md-9">
                            <input type="text" placeholder="write here" style={{width:"300px"}} value={text} onChange={(e) => setText(e.target.value)} />
                        </div>
                        <div className='col-md-3'>
                            <button style={{ border: 'none', background: 'none', color: 'white' }} onClick={handleMessageSend}> Send Message</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyDiv;
