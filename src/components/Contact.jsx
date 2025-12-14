const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-5 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 border-2 border-cyan-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in-up">
      <div className="flex flex-col gap-1.5">
        <p className="uppercase tracking-widest text-xs text-cyan-300 m-0 font-black">Let&apos;s talk</p>
        <h2 className="mt-1.5 mb-0 text-3xl font-black tracking-tight text-gradient drop-shadow-xl">Ready for cloud, DevOps, or SRE roles</h2>
        <p className="m-0 text-blue-200 font-bold text-lg">
          I bring multi-cloud expertise, Kubernetes delivery, and security-first automation to teams that want reliable,
          cost-aware platforms. Reach out to explore impact together.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-black no-underline transition-all bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 text-white border-2 border-pink-400/60 shadow-xl min-w-[200px] hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-purple-400/80 hover:-translate-y-2 hover:shadow-purple-500/50 hover:scale-110 transform duration-300 text-lg animate-fade-in-up" href="https://mail.google.com/mail/?view=cm&fs=1&to=mohithmunagala14@gmail.com" target="_blank" rel="noopener noreferrer">
          Email Mohith
        </a>
        <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-black no-underline transition-all bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 text-white border-2 border-pink-400/60 shadow-xl min-w-[200px] hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-purple-400/80 hover:-translate-y-2 hover:shadow-purple-500/50 hover:scale-110 transform duration-300 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }} href="tel:+12175120363">
          Call / Text
        </a>
        <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-black no-underline transition-all bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 text-white border-2 border-pink-400/60 shadow-xl min-w-[200px] hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-purple-400/80 hover:-translate-y-2 hover:shadow-purple-500/50 hover:scale-110 transform duration-300 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }} href="https://www.linkedin.com/in/mohith-munagala-48179b1b1/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-black no-underline transition-all bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 text-white border-2 border-pink-400/60 shadow-xl min-w-[200px] hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-purple-400/80 hover:-translate-y-2 hover:shadow-purple-500/50 hover:scale-110 transform duration-300 text-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }} href="https://github.com/reddy771616" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact
