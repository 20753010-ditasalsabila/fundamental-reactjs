import { Component } from "react";
import Decrement from "./Decrement";

export default class Number extends Component {
    state = {
        number: this.props.default
    }

    changeDecre = (decre) => {
        this.setState({
            number: decre
        })
    }

    render() {
        return (
            <div>
                <Decrement number={this.state.number} 
                callbackOne={this.changeDecre}/>
            </div>
        )
    }
}