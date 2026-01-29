const Hero = ({ heroPhoto, professionalSummary, stats }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[95%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Download CV strip */}
        <div className="w-full flex justify-center lg:justify-end mb-6">
          <a
            href="/Mohith_Munagala_CV.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 border border-white/30 text-white font-semibold shadow-2xl backdrop-blur hover:bg-white/25 hover:scale-105 transition-all duration-300"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg">
              ↓
            </span>
            <span className="text-lg tracking-tight">Download CV</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Name and Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up px-2 lg:px-0 pt-8">
            {/* Big Highlighted Name */}
            <div className="space-y-4 overflow-visible">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight break-words">
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient" style={{ 
                  WebkitTextStroke: '1px transparent',
                  textShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
                  display: 'block',
                  width: '100%'
                }}>
                  MOHITH
                </span>
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient mt-2" style={{ 
                  WebkitTextStroke: '1px transparent',
                  textShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
                  display: 'block',
                  width: '100%'
                }}>
                  MUNAGALA
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-white/90 mt-4">
                Cloud & DevOps Engineer
              </p>
            </div>

            {/* Summary */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {professionalSummary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#experience" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Experience
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((item, index) => (
                <div 
                  key={item.label} 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-black text-white mb-1">{item.value}</div>
                  <div className="text-sm text-white/80 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right mt-16">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              
              {/* Profile Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src={heroPhoto} 
                  alt="Mohith Munagala - Cloud & DevOps Engineer" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Floating Badge */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
