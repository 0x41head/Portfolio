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
      this.rnd.updateSize({ width: this.props.width, height: this.props.height });
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
          style = {{"font-family": this.props.font,
          "font-size": this.props.fsize,
          "font-weight":this.props.ft}}
          default={{
          x: this.props.inix,
          y: this.props.iniy,
          width: this.props.width,
          height: this.props.height
          }}
          minHeight= "150px"
          minWidth ="240px">
            <div className="topbox">
              <button className="close" onClick={this.delete}>X</button>
              <button className="maximize" onClick={this.mxmzfunc}>❏</button>
              <button className="minimize">-</button>
            </div>
              <div className="content">
                <div>{this.props.content}
                <div style={{"font-size":this.props.fsize2}}>{this.props.content2}
                </div>
                </div>
              </div>
            
          </Rnd>
    );
  }
}

export default Box;
