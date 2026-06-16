import React from 'react'

const timeline = [
  { year: '2025', title: 'Senior Engineer at Acme', desc: 'Led frontend revamp.' },
  { year: '2023', title: 'Staff Engineer at Beta', desc: 'Built scalable APIs.' },
  { year: '2021', title: 'Senior Developer at Gamma', desc: 'Ship core product features.' }
]

export default function TimelineSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="site-container">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />
          <div className="ml-12">
            {timeline.map((t) => (
              <div key={t.year} className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div>
                    <div className="font-semibold">{t.title}</div>
                    <div className="text-sm text-slate-400">{t.year}</div>
                  </div>
                </div>
                <div className="mt-2 text-slate-300">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
