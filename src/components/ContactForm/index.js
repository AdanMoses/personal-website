'use client'

import React from 'react'
import { Form } from './ContactFormElements'
import { InputButton } from '../ButtonElement'
import { useState } from 'react'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [message, setSuccessMessage] = useState('')

  const onSubmit = async (e) => {
    // Prevent the form from submitting the traditional way
    e.preventDefault()

    // Don't submit twice
    if (loading) {
        return
    }

    // A nice little track to get all the form values as an object
    const form = e.target
    const formValues = Object.fromEntries(new FormData(form).entries())

    setLoading(true)
    setSuccessMessage('')

    try {
        await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues),
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })

        setLoading(false)
        setSuccessMessage('Thank you for contacting us!')

        // Reset the form values after a successful submission
        form.reset()
    } catch (err) {
        console.error(err)
        alert('An error occurred while sending your message...')
        setLoading(false)
    }
}

  return (
    <>
      <Form onSubmit={onSubmit}>
        <label >
          <p>Name<span>*</span></p>
          <input type="text" name="name" required />
        </label>
        <label >
          <p>Email<span>*</span></p>
          <input type="email" name="email" required />
        </label>
        <label >
          <p>Subject<span>*</span></p>
          <input type="text" name="subject" required />
        </label>
        <label>
          <p>Message<span>*</span></p>
          <textarea name="message" required />
        </label>
        <InputButton disabled={loading} type="submit" value="Submit" />
        {message && <p>{message}</p>}
      </Form>
    </>
  )
}

export default ContactForm
