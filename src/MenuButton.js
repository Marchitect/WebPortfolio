import React, {Component} from "react";
import "./MenuButton.css";

class MenuButton extends Component {
	render(){

		return(
			<button id="collapseMenuBtn" className="navbar-fixed-top" data-spy="affix" data-offset-top="30"
			onMouseDown={this.props.handleMouseDown}>
				<div className="dash"></div><div className="dash"></div><div className="dash"></div>
			</button>
		);
	}

}

export default MenuButton;