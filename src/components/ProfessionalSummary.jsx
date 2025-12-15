const ProfessionalSummary = ({ professionalSummary }) => {
  return (
    <section id="about" className="flex flex-col gap-5 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20 border-2 border-purple-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up">
      <div className="flex flex-col gap-1.5">
        <p className="uppercase tracking-widest text-xs text-purple-300 m-0 font-black">Professional Summary</p>
        <h2 className="mt-1.5 mb-0 text-3xl font-black tracking-tight text-gradient-blue drop-shadow-xl">What I bring to the table</h2>
        <p className="m-0 text-blue-200 font-bold text-lg">Innovative and performance-driven Cloud & DevOps Engineer with proven expertise.</p>
      </div>
      <div className="bg-gradient-to-br from-slate-900/90 via-blue-900/30 to-purple-900/30 border-2 border-blue-400/40 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm transition-all hover:border-blue-400/80 hover:shadow-blue-500/30 hover:scale-[1.01] transform duration-300">
        <p className="m-0 text-blue-100 leading-relaxed sm:leading-loose text-lg sm:text-xl text-left font-semibold drop-shadow-lg">{professionalSummary}</p>
      </div>
    </section>
  )
}

export default ProfessionalSummary
