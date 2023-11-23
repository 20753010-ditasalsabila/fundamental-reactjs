import { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        warna_favorit: "Biru Langit"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({warna_favorit: "biru langit"})
          }, 5000);
      }
  
      // lifecycle updating
      getSnapshotBeforeUpdate(prevProps, prevState) {
        this.setState({warna_favorit: "Ga ada"})
          }
  
    //lifecycle updating
    componentDidUpdate() {
      setTimeout(() => {
        this.setState({warna_favorit: "Hijau Sage"})
      }, 3000);
    }

    render() {
        console.log('render.....');
        return (
          <div>
            <h1>Iniiiiii {this.state.warna_favorit}</h1>
          </div>
        );
      }
}