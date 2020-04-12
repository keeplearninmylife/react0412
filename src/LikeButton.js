import React, { Component,Fragment } from 'react';

class LikeButton extends Component {
    constructor (props){
       super(props)
        this.state={
            number:0
        }
        this.clickButton = this.clickButton.bind(this)
    }
    clickButton(){
        this.setState (
            {
                number : ++this.state.number
            }
        ) 
    
    }
    render() { 
        return ( 
            <Fragment>
                <button onClick = {this.clickButton}>点赞{this.state.number}</button>
            </Fragment>
         );
    }
}
 
export default LikeButton;