import React from 'react'
import ContactForm from '../../components/ContactForm'
import { profile } from '../../data/profile'

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-slate-300 mb-6">Send a message — I'll respond within 48 hours.</p>
      <div className="mb-8">
        <p className="text-slate-300">📱 Phone: <span className="font-semibold">{profile.phone}</span></p>
        <p className="text-slate-300 mt-2">📧 Email: <a href={profile.contact.email} className="text-cyan-300 hover:text-cyan-200">hello@marwanali.dev</a></p>
      </div>
      <div className="max-w-2xl">
        <ContactForm />
      </div>
    </section>
  )
}
