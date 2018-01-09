import React from 'react';
import Image from './Image';
import data from './data.json';

class ImageProducer extends React.Component {
	createImage(image, addr, desc){
		return <Image source={image} href={addr} data-tooltip={desc} key={image} />;
	}

	createImages(images, addrs, descs){
		return images.map(this.createImage);
	}

	render(){
		return(
			<div>
			{this.createImages(data.images, data.addrs, data.descs)}
			</div>
		);
	}

}

export default ImageProducer;