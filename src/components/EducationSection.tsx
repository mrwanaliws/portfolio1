"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const MotionDiv: any = motion.div

export default function EducationSection() {
  const edu = profile.education

  return (
    <section id="education" className="section-padding">
      <div className="site-container">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl max-w-2xl"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">{edu.degree}</h3>
            <p className="text-lg text-slate-200 mb-1">{edu.university}</p>
            <p className="text-sm text-slate-400">{edu.location}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400 mb-1">Current Status</p>
              <p className="text-lg font-semibold text-cyan-300">{edu.status}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400 mb-1">GPA</p>
              <p className="text-lg font-semibold text-cyan-300">{edu.gpa}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-sm text-slate-400 mb-1">Expected Graduation</p>
              <p className="text-lg font-semibold text-cyan-300">{edu.expectedGraduation}</p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">{edu.description}</p>
        </MotionDiv>
      </div>
    </section>
  )
}
