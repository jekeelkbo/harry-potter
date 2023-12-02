import "./header.css"
import Gryffindor from "../../containers/gryffindor/Gryffindor"
import Slytherin from "../../containers/Slytherin/Slytherin"
import Ravenclaw from "../../containers/Ravenclaw/Ravenclaw"
import Hufflepuff from "../../containers/Hufflepuff/Hufflepuff"
import { Link } from "react-router-dom"

const Header=()=>{
    return(
<div className="headerContainer">
<Link className="menu" to="/Gryffindor" > Gryffindor</Link>
<Link className="menu" to="/Hufflepuff" > Hufflepuff</Link>
<Link className="menu" to="/Ravenclaw" > Ravenclaw</Link>
<Link className="menu" to="/Slytherin" > Slytherin</Link>
HARRY POTTER
<Link className="menu" to="/">Home</Link>
</div>
    )
}
export default Header