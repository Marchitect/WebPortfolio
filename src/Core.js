import React from 'react';
import MenuContainer from './MenuContainer';
import{
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

import './Core.css';

class Core extends React.Component{

	render(){
		return(
		<HashRouter>
		<div>
			<div className="top-row">
				<MenuContainer />
				
				<h1>May, Web Developer</h1>
				<NavLink exact to="/"><div className='square'></div></NavLink>
			</div>
				
			
				<Route exact path="/" component={Home} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
					
				


		</div>
		</HashRouter>
		);
	}
}

export default Core;