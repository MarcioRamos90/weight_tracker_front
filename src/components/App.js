import React from 'react';
import './App.css';
import NewWeights from './NewWeighings'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Gráfico de emagrecimento
      </header>
      <h2>Confire seu historico de pesagem abaixo!</h2>
      <NewWeights />
    </div>
  );
}

export default App;
