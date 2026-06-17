"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const MotionDiv: any = motion.div

export default function Hero() {
  return (
    <section className="mb-12">
      <MotionDiv initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300 mb-4">{profile.title}</p>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">Exploring Artificial Intelligence to build smart solutions for real-world challenges.</h2>
        <p className="mt-6 text-slate-300 max-w-2xl">{profile.about}</p>
        <div className="mt-6 text-slate-300">
          <p>📱 <span className="font-semibold">{profile.phone}</span></p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-slate-900 rounded-full font-medium">Work with me</a>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 rounded-full text-slate-300">Get in touch</a>
        </div>
      </MotionDiv>
    </section>
  )
}
