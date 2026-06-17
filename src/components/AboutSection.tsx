import React from 'react'
import StatsCard from './StatsCard'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="hero-profile mb-6">
            <img src="/profile.jpg" alt="Marwan Ali Mohamed" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold mb-2">About </h2>
          <p className="text-slate-300">I am a fourth-year Computer Science student specializing in Artificial Intelligence, Machine Learning, and Data Analysis. My interests extend to Web Development and Mobile Application Development, where I enjoy building practical and scalable solutions. Through academic studies and personal projects, I have developed strong analytical and problem-solving skills, with a continuous drive to learn, innovate, and create technology that delivers real-world value.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatsCard title="Core Expertise" value="full-stack, Data Analysis, " />
          <StatsCard title="Education" value="Bachelor of Computer Science & AI Specialization" />
          <StatsCard title="Tools" value="Python, SQL, Git, GitHub, VS Code," />
          <StatsCard title="Focus" value="AI, Machine Learning, Data Analysis, Web Development, Mobile Development, " />
        </div>
      </div>
    </section>
  )
}
