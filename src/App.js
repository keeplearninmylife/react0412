import React, {Component,Fragment} from "react"
import Acontext from './Acontext';
import Bcon from './Bcon'
import NameCard from './NameCard';
import LikeButton from  "./LikeButton"
import Time from  "./Time"
import CommentBox from  "./CommentBox"
import CommentList from  "./CommentList"

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            connect:[123,"daf"],
            abc:567
        }
        this.changeConect =this.changeConect.bind(this)
        this.delConnect = this.delConnect.bind(this)
    }
    changeConect(e){
        this.setState({
            connect:[...this.state.connect,e]
        })
    }
    delConnect(index){
        const connect = this.state.connect
        connect.splice(index,1)
        this.setState({
            connect:connect
        })

    }
    render(){
        const tags =["牛逼","害羞"]
        return (
            <Fragment>
                <NameCard name="king" number = "1234567" isHuman= "true" tags = {tags}/>
                <LikeButton/>
                <Time/>
                <CommentList connect ={this.state.connect} delConnect={this.delConnect}/>
                <CommentBox changeConect = {this.changeConect} length = {this.state.connect.length} />
                <Acontext.Provider value={this.state.abc}>
                    context
                    <Bcon/>
                </Acontext.Provider>
            </Fragment>

        )
    }
}

export default App
