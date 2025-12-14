const TopBar = ({ contactLinks }) => {
  return (
    <div className="flex justify-between items-center gap-3 p-4 px-6 rounded-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-2 border-blue-400/40 shadow-2xl backdrop-blur-md animate-fade-in hover:border-blue-400/80 transition-all duration-300">
      <div className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 drop-shadow-lg">Mohith Munagala · Cloud & DevOps Engineer</div>
      <div className="flex flex-wrap gap-3">
        {contactLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="text-white no-underline font-black px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-2 border-blue-400/50 transition-all hover:bg-blue-500/50 hover:border-blue-400/80 hover:-translate-y-1 hover:scale-110 transform duration-300 shadow-lg"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TopBar
