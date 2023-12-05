import "./card.css"
import Gryffindor from "../../containers/gryffindor/Gryffindor"
import { useState } from "react"
import Modal from "../Hero/Modal/Modal"


const Card = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
        <div
            onClick={() => {
                setShow(true)
            }}
            className="characterPresentation">
            <img className="characters" src={props.image} />
            <span className="characterName">{props.name}</span>


        </div>
          {show === true ?<Modal  name={props.name}image={props.image} setShow={setShow} />:null}
          </>
    )
}
export default Card