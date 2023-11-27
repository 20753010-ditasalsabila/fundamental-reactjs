import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

class ClickCounter extends Component {
    render() {
        const { count, increment, decrement } = this.props;
    return (
      <div>
        <button className='btn btn-secondary mx-3' onClick={decrement}>
            -
        </button>
        <span>{count}</span>
        <button className='btn btn-secondary mx-3' onClick={increment}>
            +
        </button>
      </div>
    )
  }
}

const newClickCounter = withCounter(ClickCounter);
export default newClickCounter;
