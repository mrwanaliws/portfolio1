"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const MotionDiv: any = motion.div

export default function CertificatesSection() {
  const certificates = profile.certificates

  return (
    <section id="certificates" className="section-padding">
      <div className="site-container">
        <h2 className="text-3xl font-bold mb-8">Certificates & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <MotionDiv
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-6 rounded-2xl hover:border-cyan-400/50 transition-all"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-400">{cert.organization}</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
