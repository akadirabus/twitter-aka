import React from 'react';
import './Index.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets'

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