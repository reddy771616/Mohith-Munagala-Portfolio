const Education = ({ education }) => {
  return (
    <section id="education" className="flex flex-col gap-5 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20 border-2 border-green-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up">
      <div className="flex flex-col gap-1.5">
        <p className="uppercase tracking-widest text-xs text-green-300 m-0 font-black">Education</p>
        <h2 className="mt-1.5 mb-0 text-3xl font-black tracking-tight text-gradient-green drop-shadow-xl">Academic Foundation</h2>
        <p className="m-0 text-blue-200 font-bold text-lg">Strong educational background in computer science and engineering.</p>
      </div>
      <div className="relative">
        {/* Center Timeline Line - Hidden on mobile, visible on md and up */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-60 shadow-lg transform -translate-x-1/2"></div>
        
        {/* Mobile Timeline Line - Visible only on mobile */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-60 shadow-lg"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.school} 
              className={`relative flex items-start gap-6 animate-fade-in-up md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} flex-row`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute md:left-1/2 left-6 top-3 w-5 h-5 rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 shadow-xl border-2 border-white/50 md:transform md:-translate-x-1/2 z-10`}></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                <article className="bg-gradient-to-br from-slate-900/90 via-blue-900/30 to-purple-900/30 border-2 border-blue-400/40 rounded-2xl p-5 shadow-xl hover:border-blue-400/80 hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h3 className="m-0 text-xl font-black text-gradient-green drop-shadow-lg">{edu.school}</h3>
                      <p className="text-blue-200 mt-1 mb-0 font-bold">{edu.program}</p>
                    </div>
                    <span className="px-5 py-2 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-white border-2 border-green-400/50 font-black text-sm shadow-lg whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <ul className="mt-4 mb-0 pl-5 text-blue-100 flex flex-col gap-2 list-disc font-semibold">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="drop-shadow-md">{detail}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
