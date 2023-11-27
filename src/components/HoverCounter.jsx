import React, { Component } from 'react'

export default class HoverCounter extends Component {
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
        <p onMouseLeave={this.handleIncrement}>Hover: {this.state.count} Times</p>
      </div>
    )
  }
}
