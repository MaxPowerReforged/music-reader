import React, { Component } from 'react';
import Vex from 'vexflow';

class ScoreContainer extends Component {
  componentDidMount() {
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: 'scoreContainer', width: 500, height: 200 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    system
      .addStave({
        voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))],
      })
      .addClef('treble')
      .addTimeSignature('4/4');

    vf.draw();
  }

  render() {
    return <div id="scoreContainer"></div>;
  }
}

export default ScoreContainer;
