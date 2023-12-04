import "./header.css"
import Gryffindor from "../../containers/gryffindor/Gryffindor"
import Slytherin from "../../containers/Slytherin/Slytherin"
import Ravenclaw from "../../containers/Ravenclaw/Ravenclaw"
import Hufflepuff from "../../containers/Hufflepuff/Hufflepuff"
import { Link } from "react-router-dom"
import App from "../../App"
import { useState } from "react"

const Header=()=>{
    const [theme,setTheme]=useState(false)
    return(
<div className="headerContainer">
<Link className="menu" to="/Gryffindor" > Gryffindor</Link>
<Link className="menu" to="/Hufflepuff" > Hufflepuff</Link>
<Link className="menu" to="/Ravenclaw" > Ravenclaw</Link>
<Link className="menu" to="/Slytherin" > Slytherin</Link>
HARRY POTTER
<Link className="menu" to="/">Home</Link>
<button className="nightDay"onClick={()=>{
    console.log("il doit faire nuit")
}}>🌒</button>

</div>
    )
}
export default Header