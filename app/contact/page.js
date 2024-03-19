'use client'

import { useState } from 'react'
import Navbar from '../../src/components/Navbar'
import Sidebar from '../../src/components/Sidebar'
import ContactForm from '../../src/components/ContactForm'
import Footer from '../../src/components/Footer'


const contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default contact
