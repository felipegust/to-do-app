import './App.css';
import Item from '../src/components/item';
import React, { useEffect, useState } from 'react';
// import fetch from 'fetch';

function App() {

  const [itens, setItens] = useState([
    { "_id": 1, "texto": "texto1" }, { "_id": 2, "texto": "texto1" }, { "_id": 3, "texto": "texto1" }
  ])

  const [textoEdit, setTextoEdit] = useState("")

  function handleAdd(e) {
    console.log(e)
    let id = itens[itens.length - 1]._id + 1
    setItens([...itens, { "_id": id, "texto": "" }])
  }

  function handleEdit(value) {
    setTextoEdit(value)
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      let newItens = [...itens]
      newItens[newItens.length - 1].texto = textoEdit
      setItens([...newItens])
      setTextoEdit("")
    }
  }

  function handleDelete(event) {
    console.log(event)
  }

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
          return <Item key={item._id} texto={item.texto} onDelete={handleDelete} onChange={handleEdit} onKeyPress={handleKeyPress} />
        })}
        <div className="rowContainer">

          <button onClick={(e) => handleAdd(e)}>Inserir</button>
        </div>
        <div className="rowContainer">
          <span>Concluídos</span><span>Pendentes</span>
        </div>
      </div>
    </div>
  );
}

export default App;
