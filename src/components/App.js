import React from 'react';
import './App.css';
import NewWeights from './NewWeighings'
import AllWeighings from './AllWeighings'
import { Grid } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Gráfico de emagrecimento
      </header>
      <NewWeights />
      <div style={{margin:20}}>
        <h2>Confire seu historico de pesagem abaixo!</h2>
      </div>
      <Grid centered style={{width: 600, margin: "0 auto"}}>
        <AllWeighings />
      </Grid>
    </div>
  );
}

export default App;
