import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

class HoverCounter extends Component {
    render() {
        const { count, increment } = this.props;
    return (
      <div>
        <p onMouseLeave={increment}>Hover: {count} Times</p>
      </div>
    )
  }
}

const newHoverCounter = withCounter(HoverCounter);
export default newHoverCounter;
