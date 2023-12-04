import "./slytherin.css"
import Card from "../../components/Card/Card"
import Hero from "../../components/Hero/Hero"
import Modal from "../../components/Hero/Modal/Modal"
import Home4 from "../../assets/sly.png"


const Slytherin=()=>{
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
    
      return (
        <div className="gryffContainer"> 
    
    <div className="homeInput">
      <img src={Home4} alt="home"></img>
      <div><input type="text" value=""/></div>
      </div>
          <div className="characterContainer">
            {apiAnswer.map((character) => {
              return (
                <Card name={character.name} image={character.image} />
                )
              })}
          </div>
              </div>
      )
}
export default Slytherin