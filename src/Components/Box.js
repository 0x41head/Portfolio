import React from 'react';
import './Box.css';
import { Rnd } from "react-rnd";

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mxmz: false,
      height_abovenav: window.innerHeight*0.9575,
      avl: true,
    }

    this.mxmzfunc = this.mxmzfunc.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete(){
    this.setState({
      avl: false,
    });
    this.rnd.updatePosition({ x: window.innerWidth, y: 0 });
  }
  mxmzfunc(){
    const ismxmz = !this.state.mxmz;
    
    if(ismxmz === true){
      this.rnd.updatePosition({ x: 0, y: 0 });
      this.rnd.updateSize({ width: window.innerWidth, height: this.state.height_abovenav });
    }
    else{
      this.rnd.updateSize({ width: 360, height: 225 });
    }
    
    this.setState({
      mxmz: ismxmz,
    });
  }
  render() {
    return (
        <Rnd
        ref={c => { this.rnd = c; }}
          className="drag-box"
          default={{
          x: this.props.inix,
          y: this.props.iniy,
          width: 360,
          height: 225
          }}
          minHeight= "150px"
          minWidth ="240px">
            <div className="topbox">
              <button className="close" onClick={this.delete}>X</button>
              <button className="maximize" onClick={this.mxmzfunc}>❏</button>
              <button className="minimize">-</button>
            </div>
              <div className="content">
                <div>{this.props.content}</div>
              </div>
            
          </Rnd>
    );
  }
}

export default Box;
