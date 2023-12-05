import "./modal.css"
import { useState } from "react"



const Modal=(props)=>{

    return(
<div    
onClick={()=>{
props.setShow(false)
}}
className="modalContainer">
                <img className="characters" src={props.image} />
                <div>{props.name}</div>
                <div>Maison :</div>
            </div>
        )
}
export default Modal