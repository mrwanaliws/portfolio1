"use client"
import React, { useEffect, useState } from 'react'

export default function TypingEffect({ words = ['AI and Data Analysis Engineer', 'Machine Learning Specialist', 'Analytics Systems Builder'] }: { words?: string[] }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((b) => !b)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (index >= words.length) return
    if (!reverse) {
      if (subIndex < words[index].length) {
        const timeout = setTimeout(() => setSubIndex((s) => s + 1), 80)
        return () => clearTimeout(timeout)
      }
      const timeout = setTimeout(() => setReverse(true), 900)
      return () => clearTimeout(timeout)
    } else {
      if (subIndex > 0) {
        const timeout = setTimeout(() => setSubIndex((s) => s - 1), 40)
        return () => clearTimeout(timeout)
      }
      setReverse(false)
      setIndex((i) => (i + 1) % words.length)
    }
  }, [index, subIndex, reverse, words])

  return <span>{words[index].substring(0, subIndex)}<span className="inline-block w-1 bg-white align-middle" style={{ opacity: blink ? 1 : 0 }} /></span>
}
