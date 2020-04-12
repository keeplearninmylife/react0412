import React from 'react';
import Acontext from "./Acontext"

const Bcon = ()=>{
    return(
        <Acontext.Consumer>
            {theme=>{
                return(
                    <div>{theme+1}</div>
                )
                
            }}
        </Acontext.Consumer>
    )
}
export default Bcon