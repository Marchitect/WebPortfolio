import React from 'react';

let Image = function statelessFunctionComponentClass(props){
	// the image files reside in img folder in public folder
	let source = './img/' + props.source;

	let addr = props.addr;

	let desc = props.desc;

	return(
		<div className="imgContainer"><a href={addr} data-tooltip={desc}><img src={source} alt={source} title={source}/></a></div>
	);
};

export default Image;