"use client"
import React from 'react'
import { motion } from 'framer-motion'

const MotionArticle: any = motion.article

type Props = {
  id: string
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <MotionArticle whileHover={{ y: -6 }} className="p-6 rounded-xl subtle-blur border border-slate-800">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
      </MotionArticle>
  )
}
