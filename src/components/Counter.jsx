import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props)

        // state di dalam constructor
        this.state = {
            // nilai dari state bisa di isi secara langsung, namun bisa juga menggunakan props yang di panggil di Parent/App
            number: 0
        }
    }

    // state di luar constructor
    // state = {
        // nilai dari state bisa di isi dengan menggunakan props
        // number: this.props.default
    // }

    decrement() {
        this.setState({
            number: this.state.number - 1
        })
    }
    
    increment() {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
        return (
            <>
            <h1>{this.state.number}</h1>
            <button className="btn btn-primary" onClick={this.increment.bind(this)}>+</button>
            <button className="btn btn-primary mx-2" onClick={this.decrement.bind(this)}>-</button>
            </>
        )
    }
}