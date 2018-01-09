import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>My Current Skills Spectrum</h3>
        <h4>HTML & XML</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="10"/>
        
        <h4>CSS & Reprocessors</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="9"/>

        <h4>JavaScript & React</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>

        <h4>PHP</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>

        <h4>SQL</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>

        <h4>WordPress</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="8"/>

        <h4>Adobe Creative Suite</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="5"/>

        <h4>Version Control</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="9"/>

        <h4>SEO</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="5"/>

        <h4>eCommerce</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>
      </div>
    );
  }
}
 
export default Home;