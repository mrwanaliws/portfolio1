import React from 'react'
import ServiceCard from '../components/ServiceCard'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import EducationSection from '../components/EducationSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import CertificatesSection from '../components/CertificatesSection'
import Particles from '../components/Particles'
import { services } from '../data/services'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <section>
      <header className="mb-12">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="mt-3 text-slate-300 max-w-prose">{profile.description}</p>
      </header>
      <div className="relative">
        <Particles />
        <Hero />
      </div>
      <section id="services" aria-labelledby="services-heading" className="mt-10">
        <h2 id="services-heading" className="text-2xl font-semibold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        <p className="text-slate-300 mb-4">Open to collaborations and new opportunities. Reach out via the contact form or call directly.</p>
        <p className="text-slate-300 mb-4">📱 {profile.phone}</p>
        <a href="/contact" className="inline-block mt-2 px-5 py-3 bg-primary text-slate-900 rounded-md font-medium">Contact Me</a>
      </section>
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
    </section>
  )
}
