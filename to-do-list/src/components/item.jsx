import React, { Component } from 'react';

export default class Item extends Component {

    render() {
        return (
            <div className="card">
                <input type="checkbox" key={this.props.key}/>
                <div className="rowContainer">

                <div className="row1">
                {this.props.texto}
                </div>
                <div className="row2">
                    <span>{"28/07"}</span>
                     {/* <span>{"Pendente"}</span> */}
                </div>
                </div>
                
                <button>Apagar</button>
            </div>
        )
    }

}
