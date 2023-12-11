// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome"
import Workshops from "./Components/Workshops/Workshops";
import Competitions from "./Components/Competitions/Competitions";
import Sponsors from './Components/Sponsors/Sponsors'
import FAQs from './Components/FAQs/FAQs'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos'
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1200,
    })
  },[])
  return (
    <>
    <Navbar></Navbar>
    <Home/>
    <Welcome></Welcome>
    <Workshops></Workshops>
    <Competitions></Competitions>
    <Sponsors></Sponsors>
    <FAQs></FAQs>
    <Footer></Footer>
    </>
  );
}

export default App;
