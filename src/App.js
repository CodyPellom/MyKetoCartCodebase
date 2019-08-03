import React from 'react';
import logo from './logo.svg';
import './App.css';
import TemporaryDrawer from './components/TemporaryDrawer';
import LandingCard from './components/LandingCard';

function App() {
  return (
    <div className="App">
      <TemporaryDrawer />
      <header className="App-header">
      <LandingCard />
      </header>
    </div>
  );
}

export default App;
