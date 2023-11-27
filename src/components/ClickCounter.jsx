import React, { Component } from 'react'

export default class ClickCounter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
        count: this.state.count + 1,
    });
  }
  
    render() {
    return (
      <div>
        <button className='btn btn-secondary' onClick={this.handleIncrement}>Clicked: {this.state.count} Times</button>
      </div>
    )
  }
}
