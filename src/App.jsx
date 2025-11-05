import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Parallax effect for orbs
    const handleMouseMove = (e) => {
      const orbs = document.querySelectorAll('.orb')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.project-card, .skill-item, .glass').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'all 0.6s ease'
      observer.observe(el)
    })
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-gradient"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
