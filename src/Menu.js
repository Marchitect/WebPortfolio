import React, { Component } from "react";
import "./Menu.css";

import{
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class Menu extends Component {


  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      // onMouseDown handles when you touch to exit the extended menu
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><NavLink exact to="/">Home</NavLink></h2>
        <h2><NavLink to="/portfolio">Portfolio</NavLink></h2>
        <h2><NavLink to="/contact">Contact</NavLink></h2>
      </div>
    );
  }
}
 
export default Menu;