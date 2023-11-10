import React from 'react';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import Input from '../components/Input';
import Chats from '../components/Chats';
import Chat from '../components/Chat';

const Homepage = () => {
  return (
    <div className='home'>
       <div className="container">
        <Sidebar />
        <Chat />
       </div>
    </div>
  );
}

export default Homepage;
