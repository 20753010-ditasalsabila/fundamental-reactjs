import { Component } from 'react';

const withCounter = (WrappedComponent) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    };

    handleIncrement = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    
    handleDecrement = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
