import React, { Component } from "react";

function Item(props) {
	function handleChange(e) {
		props.onChange(e.target.value);
	}

	function handleKeyPress(e) {
		props.onKeyPress(e);
	}

	function handleDelete(e) {
		props.onDelete(e);
	}

	function handleStatus(e) {
		props.onStatus(e);
	}

	return (
		<div className="card">
			<input
				type="checkbox"
				key={props.key}
				onClick={handleStatus}
				checked={!props.pendente}
			/>
			<div className="rowContainer">
				<div className="row1">
					{props.texto ? (
						<span
							style={
								props.pendente
									? {}
									: { textDecoration: "line-through" }
							}
						>
							{props.texto}
						</span>
					) : (
						<input
							type="text"
							value={props.value}
							onChange={handleChange}
							onKeyPress={handleKeyPress}
						/>
					)}
				</div>
				{/* <div className="row2">
                    <span>{"28/07"}</span>
                     <span>{"Pendente"}</span>
                </div> */}
			</div>

			<button onClick={handleDelete}>Apagar</button>
		</div>
	);
}

export default Item;
// export default class Item extends Component {

//     handleChange = (e) => {
//         this.props.onChange(e.target.value);
//     }

//     render() {
//         return (
//             <div className="card">
//                 <input type="checkbox" key={this.props.key} />
//                 <div className="rowContainer">

//                     <div className="row1">
//                         {this.props.texto ? this.props.texto : <input type="text" value={props.value} onChange={handleChange} />}
//                     </div>
//                     {/* <div className="row2">
//                     <span>{"28/07"}</span>
//                      <span>{"Pendente"}</span>
//                 </div> */}
//                 </div>

//                 <button>Apagar</button>
//             </div>
//         )
//     }

// }
