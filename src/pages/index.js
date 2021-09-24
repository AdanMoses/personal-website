import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjFive, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Popdown from '../components/Popdown'
import Sidebar from '../components/Sidebar'
import Works from '../components/Works'

const Home = () => {
  const [isOpen, setIsOpen, isPopdownOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  const togglePopdown = () => {
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
      <Popdown isPopdownOpen={isPopdownOpen} onClick={togglePopdown}/>
      <InfoSection {...homeObjFive}/>
      <Footer />
    </>
  )
}

export default Home
