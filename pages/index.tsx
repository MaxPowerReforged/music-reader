import { Component } from 'react';
import NavBar from '../components/nav';
import dynamic from 'next/dynamic';

const ScoreContainer = dynamic(() => import('../components/scoreContainer'), {
  ssr: false,
});

class Welcome extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <ScoreContainer></ScoreContainer>
      </div>
    );
  }
}

export default Welcome;
