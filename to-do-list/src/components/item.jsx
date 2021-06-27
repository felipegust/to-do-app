import React, { Component } from 'react';

export default class Item extends Component {

    render() {
        return (
            <div className="card">
                <input type="checkbox" key={this.props.key}/>
                {this.props.texto}
                <button>Apagar</button>
            </div>
        )
    }

}
