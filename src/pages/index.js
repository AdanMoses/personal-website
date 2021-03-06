import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjFive, homeObjFour, homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Works from '../components/Works'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne} onClick={toggle}/>
      <InfoSection {...homeObjTwo}/>
      <Works />
      <InfoSection {...homeObjFour}/>
      <InfoSection {...homeObjFive}/>
      <Footer />
    </>
  )
}

export default Home
