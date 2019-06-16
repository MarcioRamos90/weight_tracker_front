import React from 'react';
import './App.css';
import NewWeights from './NewWeighings'
import AllWeighings from './AllWeighings'
import { Advertisement, Grid } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Advertisement
        className='App-header'
        centered
        unit='large leaderboard'
        test="Gráfico de pesagem"
      />
      <div style={{marginTop: 30}}>
        <NewWeights />
      </div>
      <div style={{ marginTop: 60}}>
        <h2>Lista de pesagens!</h2>
      </div>
      <Grid centered style={{width: 600, margin: "0 auto", marginTop: 30}}>
        <AllWeighings />
      </Grid>
    </div>
  );
}

export default App;
