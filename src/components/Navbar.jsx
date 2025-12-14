import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-2xl border-b border-blue-500/40 shadow-2xl shadow-blue-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Navbar Container */}
      <div className="py-4 transition-all duration-500">
        <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Brand - Modern Design */}
            <a 
              href="#home" 
              className="relative group"
            >
              <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-blue-500/50' 
                  : 'bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 backdrop-blur-md border-2 border-white/40 text-white'
              } group-hover:scale-110 group-hover:rotate-3`}>
                <span className="relative z-10">MM</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
            </a>

            {/* Desktop Navigation - Modern Pills Design */}
            <div className={`hidden md:flex items-center gap-2 backdrop-blur-sm px-3 py-2 rounded-full border ${
              isScrolled 
                ? 'bg-slate-800/40 border-white/20' 
                : 'bg-slate-900/30 border-white/10'
            }`}>
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className={`relative z-10 ${
                    isScrolled 
                      ? 'text-blue-200 group-hover:text-white' 
                      : 'text-white/90 group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 blur-sm"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border border-blue-400/30' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu - Slide Down */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isScrolled
                      ? 'bg-blue-500/10 text-blue-200 border border-blue-400/30 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

