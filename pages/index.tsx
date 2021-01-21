import { Component } from 'react';
import NavBar from '../components/nav';

class Welcome extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Welcome;
