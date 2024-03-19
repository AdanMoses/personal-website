import Mailgun from 'mailgun.js'
import FormData from 'form-data'
import { NextRequest, NextResponse } from 'next/server'

const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL as string
const CONTACT_FORM_TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL as string
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
	username: 'api',
	key: MAILGUN_API_KEY,

	// This needs to be customized based on your Mailgun region
	// url: 'https://api.us.mailgun.net',
})

// Export the POST handler
export async function POST(request: NextRequest) {
	// console.log("POST")
	// Get the form data from the request body
	// console.log(request.body.json())
	const { name, email, message } = await request.json()

	// Put together the email text
	const text = ['From: ' + name + '<' + email + '>\n', message].join('\n')

	try {
		// Send the email using Mailgun
		await mg.messages.create(MAILGUN_DOMAIN, {
			from: CONTACT_FORM_FROM_EMAIL,
			to: [CONTACT_FORM_TO_EMAIL],
			subject: "Contact Form Submission",
			text: "test"
			// 'h:Reply-To': email
		})

		// Send a 200 OK response
		return NextResponse.json({ status: 'ok' })
	} catch (error) {
		console.error(error)
		// Handle errors here
		// return NextResponse.error(new Error('An error occurred while processing your request.'))
		return NextResponse.error()
	}

}