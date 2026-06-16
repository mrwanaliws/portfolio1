"use client"
import React from 'react'

export default function BackgroundPremium() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gA" cx="30%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gB" cx="80%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="fBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="40" result="b" />
            <feBlend in="SourceGraphic" in2="b" mode="screen" />
          </filter>
        </defs>

        <g filter="url(#fBlur)">
          <circle cx="18%" cy="22%" r="260" fill="url(#gA)" className="bg-blob-a animate-blob-a" />
          <circle cx="84%" cy="80%" r="240" fill="url(#gB)" className="bg-blob-b animate-blob-b" />
        </g>
      </svg>

      <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-gradient-to-br from-cyan-600/6 via-transparent to-blue-500/6" />

      <ul className="absolute left-0 top-0 w-full h-full list-none m-0 p-0">
        <li className="floating-elem left-[10%] top-[30%] bg-cyan-400/10" />
        <li className="floating-elem left-[70%] top-[10%] bg-blue-400/10" />
        <li className="floating-elem left-[40%] top-[70%] bg-cyan-300/8" />
      </ul>
    </div>
  )
}
