import './App.css';
import Item from '../src/components/item';
import React, { useEffect, useState } from 'react';
// import fetch from 'fetch';

function App() {

  const [itens, setItens] = useState([
    {"_id":1, "texto": "texto1"}, {"_id":1, "texto": "texto1"}, {"_id":1, "texto": "texto1"}
  ])

  // useEffect(() => {
  //   fetch('http://localhost:3000/to-do/list')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setItens(data.data)
  //     });
  // }, [])

  return (
    <div className="main">
      <div className="to-do-list">
        <h1>To Do List</h1>
        {itens.map(item => {
          return <Item key={item._id} texto={item.texto} />
        })}
        <button>Inserir</button>
        <div className="rowContainer">
          <button>Todos</button> | <button>Concluídos</button> | <button>Pendentes</button>
        </div>
      </div>
    </div>
  );
}

export default App;
