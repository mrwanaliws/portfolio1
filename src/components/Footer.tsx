import React from 'react'
import Link from 'next/link'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 py-8">
      <div className="site-container flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-400 mb-2">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-slate-300">📱 {profile.phone}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href={profile.contact.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">GitHub</a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">LinkedIn</a>
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=mrwanali257@gmail.com"
             target="_blank"
             rel="noreferrer"
             className="text-slate-300 hover:text-white transition"
>
  Email
</a>


   <a
  href="/contact"
  className="relative z-[9999] text-slate-300 hover:text-white transition"
>
  Contact
</a>
          
        </div>
      </div>
    </footer>
  )
}
