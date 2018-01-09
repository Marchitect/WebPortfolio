import React, { Component } from "react";
 
import ImageProducer from './ImageProducer';
import LightBox from './LightBox';

class Folio extends Component {
  render() {
    return (
      <div className="container">
        <LightBox />
      </div>
    );
  }
}
 
export default Folio;