import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Workshops from "./Components/Workshops";
import Competitions from "./Components/Competitions";
import Sponsors from './Components/Sponsors'
import Merchandise from './Components/Merchandise';
import FAQs from './Components/FAQs'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos'
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader';


function App() {
  const [ Loading , setLoading]=useState(true);
  useEffect(()=>{
    AOS.init({
      duration: 700,
    })
    const dataFetchFromApi = () =>{
      //Basically no api for this project so..
      setTimeout(()=>{
        setLoading(false);
      },1000)
    };

    dataFetchFromApi();
  },[])
  return Loading ? (
    <Loader />
    ) :(
    <>
    <Navbar></Navbar>
    <Home/>
    <Workshops></Workshops>
    <Competitions></Competitions>
    <Merchandise></Merchandise>
    <Sponsors></Sponsors>
    <FAQs></FAQs>
    <Footer></Footer>
    </>
  );
}

export default App;
