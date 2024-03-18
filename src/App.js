import React from 'react';
import Graph from './components/Graph/Graph';
import TeamOne from './components/TeamOne/TeamOne';
import TeamTwo from './components/TeamTwo/TeamTwo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="side-component"><TeamOne /></div>
      <div className="graph-container"><Graph /></div>
      <div className="side-component"><TeamTwo /></div>
    </div>
  );
}

export default App;
