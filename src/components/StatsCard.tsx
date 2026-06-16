import React from 'react'

export default function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="glass p-4 rounded-xl">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-slate-400">{title}</div>
    </div>
  )
}
