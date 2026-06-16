import React from 'react'

export default function AnimatedBG() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full mix-blend-overlay opacity-40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0ea5a4" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
      </svg>
    </div>
  )
}
