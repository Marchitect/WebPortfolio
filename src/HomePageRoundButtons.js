import React from 'react';

class HomePageRoundButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const content = e.target.value;
    this.props.onClick(content);
  }

  render() {
    return (
      <div className="homeButtonGroup">
        <button className="roundButton" value="pic" onClick={this.handleChange} data-tooltip="May"></button>
        <button className="roundButton" value="skills" onClick={this.handleChange} data-tooltip="Developer Skills"></button>
        <button className="roundButton" value="experience" onClick={this.handleChange} data-tooltip="Experience"></button>
      </div>
    );
  }
}

export default HomePageRoundButtons;