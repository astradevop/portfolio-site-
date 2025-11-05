import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-strong ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
              aria-label="Home"
            >
              AKASH S NAIR
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <li>
              <a 
                href="#about" 
                className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white transition-all duration-200 relative group"
                aria-label="About section"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white transition-all duration-200 relative group"
                aria-label="Projects section"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white transition-all duration-200 relative group"
                aria-label="Contact section"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="ml-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-teal-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-200"
                aria-label="Get in touch"
              >
                Get in Touch
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <a 
              href="#about" 
              className="block px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 bg-gradient-to-r from-pink-500 to-teal-400 text-white rounded-lg font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
