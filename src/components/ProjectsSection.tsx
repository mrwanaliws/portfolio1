import React from 'react'
import ProjectCard from './ProjectCard'
import { profile } from '../data/profile'

const projects = profile.projects

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="site-container">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
