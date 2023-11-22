import { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {
  // lifecycle mounting
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  state = {
    message: 'This is from Parent',
  };

  changeMessage = (newMessage) => {
    this.setState({
      message: newMessage,
    });
  };

  // lifecycle mounting & updating
  static getDerivedStateFromProps() {
    console.log('static getDerivedStateFromProps(');
  }

  // lifecycle updating
  getSnapshotBeforeUpdate() {
    console.log("Get Snapshot before update");
  }

  // lifecycle mounting & updating
  componentDidMount() {
    console.log('Component did mount');
  }

  //lifecycle updating
  componentDidUpdate() {
    console.log('Component did update');
  }

  // jika true, maka akan diupdate. jika false(default) maka tidak akan terupdate
  shouldComponentUpdate() {
    console.log('Should Component update');
    return true;
  }

  // lifecycle unmounting, akan dijalankan sebelum diunmounting
  componentWillUnmount() {
    console.log("Component did unmounting");
  }

  render() {
    console.log('render.....');
    return (
      <div>
        <Child
          name={this.props.name}
          age={this.props.age}
          message={this.state.message}
          callback={this.changeMessage}
        />
      </div>
    );
  }
}
