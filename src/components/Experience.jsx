const Experience = ({ experience }) => {
  return (
    <section id="experience" className="flex flex-col gap-5 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border-2 border-blue-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up">
      <div className="flex flex-col gap-1.5">
        <p className="uppercase tracking-widest text-xs text-purple-300 m-0 font-black">Experience</p>
        <h2 className="mt-1.5 mb-0 text-3xl font-black tracking-tight text-gradient-green drop-shadow-xl">Recent impact</h2>
        <p className="m-0 text-blue-200 font-bold text-lg">Designing and running production-grade platforms for enterprise workloads.</p>
      </div>
      <div className="relative flex flex-col gap-5">
        <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-400 opacity-60 shadow-lg animate-pulse-slow"></div>
        {experience.map((role, index) => (
          <article key={role.role} className="relative pl-10 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="absolute left-2 top-3 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 shadow-xl border-2 border-white/50 animate-pulse-slow"></div>
            <div className="bg-gradient-to-br from-slate-900/90 via-blue-900/30 to-purple-900/30 border-2 border-blue-400/40 rounded-2xl p-5 shadow-xl hover:border-blue-400/80 hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h3 className="m-0 text-xl font-black text-gradient-blue drop-shadow-lg">{role.role}</h3>
                  <p className="text-blue-200 mt-1 mb-0 font-bold">{role.company}</p>
                </div>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border-2 border-purple-400/50 font-black text-sm shadow-lg">
                  {role.period}
                </span>
              </div>
              <ul className="mt-4 mb-0 pl-5 text-blue-100 flex flex-col gap-2 list-disc font-semibold">
                {role.points.map((point) => (
                  <li key={point} className="drop-shadow-md">{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
