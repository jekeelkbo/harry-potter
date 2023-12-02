import "./gryffindor.css"
import Card from "../../components/Card/Card"
import Hero from "../../components/Hero/Hero"
import Modal from "../../components/Hero/Modal/Modal"


const Gryffindor=()=>{
    const apiAnswer = [
        {
          name: "Harry Potter",
          image: "https://ik.imagekit.io/hpapi/harry.jpg",
        },
        {
          name: "Hermione Granger",
          image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
        },
        {
          name: "Ron Weasley",
          image: "https://ik.imagekit.io/hpapi/ron.jpg",
        },
        {
          name: "Minerva McGonagall",
          image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
        },
      ];

    return(
<div className="characterContainer">

{apiAnswer.map((character)=>{
    return(
        <Card name={character.name} image={character.image}/>
        )
    })}
    </div>

    )
}
export default Gryffindor