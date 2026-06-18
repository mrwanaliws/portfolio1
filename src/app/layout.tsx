import '../styles/globals.css'
import React from 'react'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedBG from '../components/AnimatedBG'
import BackgroundPremium from '../components/BackgroundPremium'
import PageTransition from '../components/PageTransition'

export const metadata: Metadata = {
  title: "Marwan Ali Mohamed | Portfolio",
  description:
    "Marwan Ali Mohamed, AI and Data Analysis Engineer and Computer Science Student at MTI University.",

  keywords: [
    "Marwan Ali Mohamed",
    "Marwan Ali",
    "AI Engineer",
    "Data Analysis Engineer",
    "MTI University",
    "Portfolio"
  ],
verification: {

    google: "X_7jkxtBEIn4LR61r26xA_ptxIY2P5gJB6V7XrLz5-I",
  },
  openGraph: {
    title: "Marwan Ali Mohamed | Portfolio",
    description:
      "AI and Data Analysis Engineer and Computer Science Student at MTI University.",
  },
} 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="animated-bg-dots" aria-hidden />
        <BackgroundPremium />
        <AnimatedBG />
        <Header />
        <main className="site-container py-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
