import Cabecalho from "./components/cabecalho";
import Corpo from "./components/corpo";
import Main from "./components/main";
import Carrosel from "./components/main/carrosel";
import React from 'react';




function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Corpo/>
      <Main/>
      <Carrosel/>
    </div>
  );
}

export default App;
