import React from 'react'
import { OverlayElement } from './OverlayElements'

const Overlay = ({ children }) => {
  return (
    <>
      <OverlayElement>
        {children}
      </OverlayElement>
    </>
  )
}

export default Overlay
