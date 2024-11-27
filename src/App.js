import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;