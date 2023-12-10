import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Components/Navbar/Navbar'
import HOME from './Components/Home/Home'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HOME></HOME>

    </main>
  )
}
