import { Component } from "react";

export default class Button extends Component {
    
    constructor(){
        this.state = {
            name: "Dita"
        }
    }
    
    render() {
        return (
            <button className="btn btn-primary">Click Me</button>
        )
    }
}