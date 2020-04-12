import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props){
        super(props)
        // 受控组件写法
        // this.state={
        //     value:''
        // }
        // this.changeVlaue = this.changeVlaue.bind(this)
        this.sub =this.sub.bind(this)
    }
    //受控组件写法
    // changeVlaue(e){
    //     this.setState({
    //         value : e.target.value
    //     })

    // }

    sub(e){
        e.preventDefault()
       this.props.changeConect(this.input.value)
       this.input.value = ""
        // 受控写法
        // alert(this.state.value) 
        
    }
    render() { 
        return (  
            <form onSubmit = {this.sub}>
                <p>留言板</p>
                <input
                    type="text"
                    // onChange={this.changeVlaue}
                    placeholder = "请输入内容"
                    ref={(input)=>{this.input = input}}
                />
                <button type = "submit" onClick = {this.sub}>留言</button>
                <p>已有{this.props.length}条评论</p>
            </form>
        );
        //受控组件，为数据的改变途径创建各种方法
        // return (  
        //     <form onSubmit = {this.sub}>
        //         <p>留言板</p>
        //         <input
        //             type="text"
        //             onChange={this.changeVlaue}
        //             placeholder = "请输入内容"
        //         />
        //         <button type = "submit" onClick = {this.sub}>留言</button>
        //     </form>
        // );
    }
}
 
export default CommentBox;