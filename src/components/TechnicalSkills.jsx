const TechnicalSkills = ({ skillAreas }) => {
  return (
    <section id="skills" className="flex flex-col gap-5 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border-2 border-blue-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up">
      <div className="flex flex-col gap-1.5">
        <p className="uppercase tracking-widest text-xs text-purple-300 m-0 font-black">Technical Skills</p>
        <h2 className="mt-1.5 mb-0 text-3xl font-black tracking-tight text-gradient-purple drop-shadow-xl">Core competencies</h2>
        <p className="m-0 text-blue-200 font-bold text-lg">Comprehensive expertise across cloud platforms, automation, security, and DevOps practices.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {skillAreas.map((skill, index) => (
          <article key={skill.title} className="bg-gradient-to-br from-slate-900/90 via-blue-900/30 to-purple-900/30 border-2 border-blue-400/40 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 shadow-xl backdrop-blur-sm transition-all hover:border-blue-400/80 hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-105 transform duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="m-0 text-xl font-black text-gradient-blue drop-shadow-lg">{skill.title}</h3>
            <ul className="pl-5 m-0 flex flex-col gap-2 text-blue-100 list-disc font-semibold">
              {skill.items.map((item) => (
                <li key={item} className="drop-shadow-md">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
