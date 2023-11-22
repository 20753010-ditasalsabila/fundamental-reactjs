import { Component } from "react";

export default class Decrement extends Component {
    state = {
        number: this.props.number
    }

    decrement() {
        this.props.callbackOne(
            this.setState({
                number: this.props.number - 1
            })
        )
    }

    render(){
        return (
            <div>
                <div>{this.props.number}</div>
                <button className="btn btn-primary" onClick={() => {this.decrement()}}>kakaka</button>
            </div>
        )
    }
}