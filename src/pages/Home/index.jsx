import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Kevin',
      Umur: undefined
    }
  }

  render() {
    return (
      <>
        <h1 className='text-primary'>Nama: {this.state.name}</h1>
        <h1 className='text-primary'>Nama Pacar: {this.state.name_pacar}</h1>
        <button onClick={() => {this.setState({name_pacar: 'Manda'})}}>Click Me</button>
        <h1>Ini adalah data miliki: {this.props.test}</h1>
      </>
    );
  }
}
