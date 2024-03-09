'use client'

import React, {useState} from 'react'
import Footer from '../src/components/Footer'
import HeroSection from '../src/components/HeroSection'
import InfoSection from '../src/components/InfoSection'
import { homeObjFive, homeObjFour, homeObjOne, homeObjTwo } from '../src/components/InfoSection/Data'
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import Works from '../src/components/Works'
// import "../src/App.css"

export default function Page() {
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