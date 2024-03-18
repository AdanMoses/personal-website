import React from 'react'
import { Form } from './ContactFormElements'
import { InputButton } from '../ButtonElement'

const ContactForm = () => {
  return (
    <>
      <Form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <InputButton type="submit" value="Submit" />
      </Form>
    </>
  )
}

export default ContactForm
