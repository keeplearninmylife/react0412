import React, { Component } from 'react';


class CommentList extends Component {
    constructor(props){
        super(props)
    }
    delConnect(index){
        console.log(index)
      this.props.delConnect(index)
    }
    render() { 
        return(
            <ul>
                {
                    this.props.connect.map((item,index)=>(
                        <li key ={index} onClick={this.delConnect.bind(this,index)}>{item} </li>
                        // <li key ={index} onClick={()=>this.delConnect(index)}>{item} </li>
                        ))
                }
            </ul>
        )
    }
}
 
export default CommentList;