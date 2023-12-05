import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero';
import Gryffindor from "./containers/gryffindor/Gryffindor"
import Hufflepuff from "./containers/Hufflepuff/Hufflepuff"
import Ravenclaw from "./containers/Ravenclaw/Ravenclaw"
import Slytherin from "./containers/Slytherin/Slytherin"




function App() {





  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header>
          <button>🌔</button>
        </Header>
        <Hero />
        <Routes>
          <Route path='/' element={<div>test</div>}/>
          <Route path='/Gryffindor' element={<Gryffindor />} />
          <Route path='/Hufflepuff' element={<Hufflepuff />} />
          <Route path='/Ravenclaw' element={<Ravenclaw />} />
          <Route path='/Slytherin' element={<Slytherin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
