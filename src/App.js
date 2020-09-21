import React from 'react';
import './App.css';
import Sidebar from './Menu/Sidebar'
import Feed from './Home/Feed'
import Widgets from './Trends/Widgets'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;