import React,{Component,Fragment} from "react"

const NameCard = (props)=>{
   
    const {name,number,isHuman,tags} = props
    return(
        <Fragment>
            <p>{name}</p>
            <p>电话:{number}</p>
            <p>{isHuman?"人类":"外星人"}</p>
            <ul>
                {
                    tags.map((item,index)=>(
                        <li key = {index} >{item}</li>                
                    ))
                }
            </ul>
        </Fragment>
    )
  
}

// class NameCard extends Component{
//     render(){
//         const {name,number,isHuman,tags} = this.props
//         return(
//             <Fragment>
//                 <p>{name}</p>
//                 <p>电话:{number}</p>
//                 <p>{isHuman?"人类":"外星人"}</p>
//                 <ul>
//                     {
//                         tags.map((item,index)=>(
//                             <li key = {index} >{item}</li>                
//                         ))
//                     }
//                 </ul>
//             </Fragment>
//         )
//     }
// }

export default NameCard