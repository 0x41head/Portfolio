import React from 'react';
import './Box.css';
import { Rnd } from "react-rnd";

class Box extends React.Component {

  render() {
    return (
      
      <div className="allowed">
        <Rnd
          className="drag-box"
          default={{
          x: window.innerWidth-370,
          y: (window.innerHeight*0.9575)-235,
          width: 360,
          height: 225
          }}
          minHeight= "150px"
          minWidth ="240px">
            <div className="topbox">
              <button className="close">X</button>
              <button className="maximize">❏</button>
              <button className="minimize">-</button>
            </div>
              <div className="content">
                <div>I am ready to be Dragged!!!jhdjaghjkgsjgfjgsfsgfsjfusgjkfgusfksgfsjfgsjgfusgfiubhfcisbficvcyfiuvsgjfsbfxgshgjkdbibvdfbcgfiushfksfkjsgfkjsb</div>
              </div>
            
          </Rnd>
      </div>
      
    );
  }
}

export default Box;
