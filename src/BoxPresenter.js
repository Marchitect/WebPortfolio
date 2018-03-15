import React from 'react';

class BoxPresenter extends React.Component {

  render() {
    const content = this.props.content;
    let displayed = null;
    if(content === "pic"){
      displayed =
      <div>
        <h3>Hi!</h3>
        <section>
          <img src="img/profilePic.jpg" alt="" />
          <article>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        </section>
      </div>
    }
    else if (content === "skills"){
      displayed =
      <div className="container">
        <h3>My Current Skills Spectrum</h3>
        <div className="halfWidth">
        <h4>HTML & XML</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="10"/>
        
        <h4>CSS & Reprocessors</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="9"/>

        <h4>JavaScript & jQuery & React</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>

        <h4>PHP</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>

        <h4>SQL</h4>
        <input name="react" type="range" min="0" max="10" step="1" value="7"/>

        </div>
        <div className="halfWidth">
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
      </div>
    }

    else if (content === "experience") {
      displayed = 
      <div className="container">
        <h3>My Experience</h3>
        <h4>Web Developer, Sites n Stores, 1 year 1 month</h4>
        <p>I delivered Content Management (mainly WordPress) and eCommerce solutions to small and medium business owners in an agile development environment.</p>
        
      </div>
    }

    return (
      <div className="boxHome">
      {displayed}
      </div>
    );
  }
}

export default BoxPresenter;
