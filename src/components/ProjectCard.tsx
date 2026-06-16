"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  image?: string
  technologies?: string[]
  demo?: string
  repo?: string
}

const MotionDiv: any = motion.div

export default function ProjectCard({ title, description, image = '/project-default.svg', technologies = [], demo, repo }: Props) {
  return (
    <MotionDiv whileHover={{ y: -8 }} className="glass p-6 rounded-2xl flex flex-col h-full">
      <div className="h-44 w-full mb-4 bg-slate-800 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-300 mb-4 flex-grow">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-cyan-300 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-primary text-slate-900 rounded-md text-sm font-medium">
            Live Demo
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer" className="px-3 py-2 border border-slate-700 rounded-md text-sm">
            GitHub
          </a>
        )}
      </div>
    </MotionDiv>
  )
}
