"use client"
import Image from 'next/image'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './page.module.css'
import Navbar from '../Components/Navbar/Navbar'
import HOME from '../Components/Home/Home'
import Script from 'next/script'
import Welcome from '@/Components/Welcome/Welcome'
import Workshops from '@/Components/Workshops/Workshops'
import Competitions from '@/Components/Competitions/Competitions'
import Sponsors from '@/Components/Sponsors/Sponsors'
import FAQs from '@/Components/FAQs/FAQs'
import Footer from '@/Components/Footer/Footer'
function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      <HOME/>
      <Welcome/>
      <Workshops />
      <Competitions/>
      <Sponsors/>
      <FAQs/>
      <Footer/>
    </main>
  )
}
