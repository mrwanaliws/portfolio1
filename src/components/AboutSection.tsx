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
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-slate-300">I am Marwan Ali Mohamed, an AI and Data Analysis Engineer who builds intelligent analytics systems for real-world decision-making. I combine statistical modeling, machine learning, and modern data engineering to help teams unlock actionable insights from complex datasets.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatsCard title="Core Expertise" value="Machine Learning, Data Engineering, Analytics" />
          <StatsCard title="Education" value="AI & Data Analysis" />
          <StatsCard title="Tools" value="Python, SQL, TensorFlow, Power BI" />
          <StatsCard title="Focus" value="Scalable data systems & predictive intelligence" />
        </div>
      </div>
    </section>
  )
}
