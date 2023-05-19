import React from "react" ;
import Ajudiya1 from './ajudiya1';

function ajudiya(props){
let {name,course}=props ;
    return (
        <>
        <div>
             hii {name}
        </div>
        <Ajudiya1 name={name}/>
        </>
    )
}
 export default ajudiya;