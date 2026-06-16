"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const MotionDiv: any = motion.div
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionDiv
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  )
}
