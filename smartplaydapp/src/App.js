import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Valorant from './components/Valorant';
import Spec from './components/Spec';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="games" element={<Games />} />
          <Route path="games/valorant" element={<Valorant/>}/>     
          <Route path="games/valorant/spec" element={<Spec/>}></Route>   
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;

