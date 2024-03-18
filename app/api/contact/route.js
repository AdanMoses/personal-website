import Mailgun from 'mailgun.js'
import FormData from 'form-data'

const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL
const CONTACT_FORM_TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
    username: 'api',
	key: MAILGUN_API_KEY,

    // This needs to be customized based on your Mailgun region
    url: 'https://api.us.mailgun.net',
})

// Export the POST handler
export async function POST(request) {
    // Get the form data from the request body
    const { name, email, message } = await request.json()

    // Put together the email text
    const text = ['From: ' + name + '<' + email + '>\n', message].join('\n')

    // Send the email using Mailgun
    await mg.messages.create(MAILGUN_DOMAIN, {
        subject: 'New contact form submission',
        from: CONTACT_FORM_FROM_EMAIL,
        to: CONTACT_FORM_TO_EMAIL,
        text,
        'h:Reply-To': email,
    })

    // Send a 200 OK response
    return { status: 'ok' }
}