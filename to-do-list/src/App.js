import "./App.css";
import Item from "../src/components/item";
import React, { useEffect, useState } from "react";
// import fetch from 'fetch';

function App() {
	const [itens, setItens] = useState([
		{ _id: 0, text: "texto1", active: true },
		{ _id: 1, text: "texto1", active: true },
		{ _id: 2, text: "texto1", active: true },
	]);

	function handleUpdate(item) {
		const tempItens = [...itens];
		const idx = itens.findIndex((el) => el._id === item._id);

		if (item.delete) {
			const filteredItems = itens.filter((i) => i._id !== item._id);
			setItens(filteredItems);
			return;
		}

		tempItens[idx] = item;
		setItens(tempItens);
	}

	function handleAdd() {
		const added = [...itens, { _id: 4, text: "", active: true }];
		setItens(added);
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
				{itens.map((item) => {
					return (
						<Item
							key={item._id}
							itens={itens}
							item={item}
							handleUpdate={handleUpdate}
						/>
					);
				})}
				<div className="rowContainer">
					<button onClick={handleAdd}>Inserir</button>
				</div>
				<div className="rowContainer">
					<span>Concluídos</span>
					<span>Pendentes</span>
				</div>
			</div>
		</div>
	);
}

export default App;
