import React, { Component } from "react";

import HomePageRoundButtons from './HomePageRoundButtons';
import BoxPresenter from './BoxPresenter';
 
class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            content: "pic"
        };

        this.changeContent = this.changeContent.bind(this);
    }

    changeContent(newStatus){
        this.setState({content: newStatus});
    }

    render(){
        return(
        <div>
            <HomePageRoundButtons onClick={this.changeContent} />
            <BoxPresenter content={this.state.content} key={this.state.content}/>
        </div>
        );
    }

}
 
export default Home;