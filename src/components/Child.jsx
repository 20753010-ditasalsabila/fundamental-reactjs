import { Component } from "react";

export default class Child extends Component {

    handleClick(){
        this.props.callback("Change from Child")
    }

    render() {
        return (
            <div>
                <div>
                Name: {this.props.name}, age: {this.props.age}
                </div>
                <button className="btn btn-primary" onClick={() => {this.handleClick()}}>Change Message</button>
                <div>{this.props.message}</div>
            </div>
        )
    }
}