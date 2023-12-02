import "./card.css"
import Gryffindor from "../../containers/gryffindor/Gryffindor"


const Card=(props)=>{
    return(
<div className="characterPresentation">


<div className="characterName">
<p>nom: {props.name}</p>
<img className="characters" src={props.image}/>  
</div>
    

</div>
    )
}
export default Card