import React from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './Chat'

function App() {
  return (
    //bem running convention
    <div className="app">

      {/*Sidebar*/}

      <Sidebar />


      {/*Chat*/}

      <Chat />


    </div>
  );
}

export default App;
