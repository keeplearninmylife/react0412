import React, { Component } from 'react';

class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            data:new Date()
        }
    }
    componentDidMount(){
        const timer = setInterval(() => {
            this.setState({
                data:new Date()
            })
        }, 1000);
    }
    componentDidUpdate(currtProps,currtState){
        // console.log(currtProps,currtState)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() { 
        return (  
            <div>
                {this.state.data.toLocaleTimeString()}
            </div>
        );
    }
}
 
export default Time;