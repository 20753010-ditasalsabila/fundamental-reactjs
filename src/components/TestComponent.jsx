import { Component } from "react";

export default class TestComponent extends Component {
    render(){
        return (
            <div>
                <label htmlFor="">Enter Name</label>
                <input type="text" />
                <button>Click Me</button>
                <p>Welcome {this.props.name}</p>
                <p>Umur {this.props.age}</p>
            </div>
        )
    }
}