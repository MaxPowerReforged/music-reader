import React, { Component } from 'react';
import dynamic from 'next/dynamic';

const ScoreContainer = dynamic(() => import('../components/scoreContainer'), {
  ssr: false,
});

class Welcome extends Component {
  render() {
    return (
      <main>
        <ScoreContainer></ScoreContainer>
      </main>
    );
  }
}

export default Welcome;
