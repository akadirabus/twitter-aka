import React from 'react';
import './Index.css';
import Sidebar from '../Menu/Sidebar';
import Feed from './Feed'
import Widgets from '../Trends/Widgets'

function Index() {
  return (
    <div className="app">

      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Feed */}
      <Feed></Feed>

      {/* Widgets */}
      <Widgets></Widgets>
    </div>
  );
}

export default Index;