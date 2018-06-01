import React, { Component } from 'react';
import { Midi } from 'react-abc';
import { Notation } from "react-abc";

const notes = `
X:1
T:Golden Slippers
C:Traditional
L:1/4
Q:1/4=120
M:4/4
K:G
V:1
 ((G/A/)) |:"G" B ((B/c/)) B/A/G/A/ | B ((B/c/)) B/A/G/A/ | B B c B |"D7" B A A ((F/G/)) |
 |A ((A/B/)) A/G/F/G/ | A ((A/B/)) A/G/F/G/ | A c B A |1"G" A G G ((G/A/)) :|2"G" A G G z ||
 |:"G" D3 G | B A G F |"C" E3 A |"Am" c B A G |"D7" F3/2 F/ F G |
 |1 A3/2 A/ A A |"G" G3/2 F/ G A | B G F E :|2"G" A2 c2 | B3/2 c/ B A | G3 z |]
`;

class ReactAbcContainer extends Component {

  render() {
    return (
      <div>
        <Notation notation={notes} />
        <h4>Pros</h4>
        <ul>
          <li>ABC notation is simple</li>
          <li>Theoretically, can play midi directly from ABC notation, rather than creating midi files</li>
        </ul>
      </div>
    );
  }
}

export default ReactAbcContainer;
