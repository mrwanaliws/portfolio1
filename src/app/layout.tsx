import '../styles/globals.css'
import React from 'react'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedBG from '../components/AnimatedBG'
import BackgroundPremium from '../components/BackgroundPremium'
import PageTransition from '../components/PageTransition'

export const metadata: Metadata = {
  title: 'Marwan Ali Mohamed — AI and Data Analysis Engineer',
  description: 'AI and Data Analysis Engineer specializing in intelligent data products, predictive modeling, and operational analytics.',
  openGraph: {
    title: 'Marwan Ali Mohamed — AI and Data Analysis Engineer',
    description: 'AI and Data Analysis Engineer specializing in intelligent data products, predictive modeling, and operational analytics.'
  }
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
