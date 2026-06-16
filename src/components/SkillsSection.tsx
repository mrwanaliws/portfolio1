"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const MotionDiv: any = motion.div

export default function SkillsSection() {
  const skillsCategories = profile.skillsCategories

  return (
    <section id="skills" className="section-padding">
      <div className="site-container">
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsCategories.map((category, idx) => (
            <MotionDiv
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-cyan-300 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full text-sm transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
