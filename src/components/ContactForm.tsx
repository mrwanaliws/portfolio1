"use client"
import React, { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 glass-strong p-6 rounded-2xl">
      <label className="flex flex-col">
        <span className="text-sm text-slate-300">Name</span>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 p-3 rounded-md bg-slate-800 border border-slate-700" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-slate-300">Email</span>
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 p-3 rounded-md bg-slate-800 border border-slate-700" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-slate-300">Message</span>
        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 p-3 rounded-md bg-slate-800 border border-slate-700 min-h-[120px]" />
      </label>

      <div className="flex items-center gap-4">
        <button type="submit" className="px-5 py-3 bg-accent rounded-md font-medium">Send</button>
        {status === 'sending' && <span className="text-slate-300">Sending…</span>}
        {status === 'sent' && <span className="text-emerald-400">Message sent. Thank you.</span>}
        {status === 'error' && <span className="text-rose-400">Error sending message.</span>}
      </div>
    </form>
  )
}
