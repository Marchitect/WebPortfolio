import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
 
const images = [
  'img/BeyondArchitechniques.png',
  'img/BioMed.png',
  'img/BridesMaids.png',
  'img/ExpressTiling.png',
  'img/HydesQualityDrycleaners.png',
  'img/YogaChamps.png'
];

const titles = [
  <a href="http://beyondarchitechniques.com.au/" target="_blank" rel="noopener noreferrer">Beyond Architechniques</a>,
  <a href="https://bio-medanimalhealth.com/" target="_blank" rel="noopener noreferrer">Bio-Med Animal Health</a>,
  <a href="https://bridesmaidforall.com.au/" target="_blank" rel="noopener noreferrer">Brides Maids</a>,
  <a href="https://expresstiling.com.au/" target="_blank" rel="noopener noreferrer">Express Tiling And Stone Craft Pty Ltd</a>,
  <a href="https://hydesqualitydrycleaners.com.au/" target="_blank" rel="noopener noreferrer">Hyde's Quality Dry Cleaners</a>,
  <a href="http://yogachamps.com.au/" target="_blank" rel="noopener noreferrer">Yoga Champs</a>
];

const descs = [
  'WordPress Website',
  'OpenCart Website',
  'OpenCart Website',
  'WordPress Website',
  'WordPress Website',
  'WordPress Website'
];
 
export default class LightBox extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <button type="button" className="viewFolioBtn" onClick={() => this.setState({ isOpen: true })}>
          Click to View My Portfolio
        </button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={titles[photoIndex]}
            imageCaption={descs[photoIndex]}
            clickOutsideToClose={true}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}