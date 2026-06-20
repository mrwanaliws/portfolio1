import "../styles/globals.css"
import React from 'react'
import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedBG from '../components/AnimatedBG'
import BackgroundPremium from '../components/BackgroundPremium'
import PageTransition from '../components/PageTransition'

export const metadata: Metadata = {
  title: "Marwan Ali Mohamed | Portfolio",
  metadataBase: new URL("https://marwanalimohamed-delta-ten-87.vercel.app"),
  description:
    "Marwan Ali Mohamed, AI and Data Analysis Engineer and Computer Science Student at MTI University.",
        
  
    keywords: [
      "Marwan Ali Mohamed",
      "Marwan Ali",
      "AI Engineer",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
      "Data Analyst",
      "Web Developer",
      "Software Developer",
      "MTI University",
      "Computer Science",
      "Portfolio",
      "مروان علي محمد",
      "مهندس الذكاء الاصطناعي",
      "تحليل البيانات",
      "مروان علي",
      "مروان علي محمد عبد الرحيم",
      "مطور ويب",
      "مطور برامج",
      "جامعة MTI",
      "علوم الحاسوب",
      "الجامعة الحديثة للتكنولوجيا والمعلومات",
      "موقع مروان علي محمد", 
      "مهندس ذكاء اصطناعي",
      "ذكاء اصطناعي",
      "تعلم الآلة",
      "تحليل البيانات",
      "محلل بيانات",
      "علوم البيانات",
      "بايثون",
      "بنك المعلومات",
      "لوحات المعلومات",
      "مطور ويب",
      "مطور برمجيات",
      "حاسبات وذكاء اصطناعي",
      "مشاريع ذكاء اصطناعي", 
       "مشاريع تحليل بيانات",
      "مشاريع تعلم الآلة",
      "مشاريع علوم البيانات", 
      "artificial intelligence",
      "software engineer",

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
