import './App.css';
import Item from '../src/components/item';
import React, { useEffect, useState } from 'react';
// import fetch from 'fetch';

function App() {

  const [itens, setItens] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/to-do/list')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItens(data.data)
      });
  }, [])

  return (
    <div className="main">
      <div className="to-do-list">
        <h1>To Do List</h1>
        {itens.map(item => {
          return <Item key={item._id} texto={item.texto} />
        })}
        Visualizar: <button>Todos</button> | <button>Concluídos</button> | <button>Pendentes</button>
        <button>Inserir</button>
      </div>
    </div>
  );
}

export default App;
