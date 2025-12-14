const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="flex flex-col gap-5 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-blue-600/20 border-2 border-pink-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up">
      <div className="flex flex-col gap-1.5">
        <p className="uppercase tracking-widest text-xs text-pink-300 m-0 font-black">Certifications</p>
        <h2 className="mt-1.5 mb-0 text-3xl font-black tracking-tight text-gradient-purple drop-shadow-xl">Industry credentials</h2>
        <p className="m-0 text-blue-200 font-bold text-lg">Industry-recognized certifications validating cloud and DevOps expertise.</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {certifications.map((cert, index) => (
          <span key={cert} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-black text-base shadow-2xl hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300 animate-fade-in-up transform" style={{ animationDelay: `${index * 0.1}s` }}>
            {cert}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Certifications
