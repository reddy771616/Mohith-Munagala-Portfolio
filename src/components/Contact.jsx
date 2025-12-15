import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', note: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ state: 'error', note: 'Please fill name, email, and phone.' })
      return
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    const endpointMissing = !endpoint || endpoint.includes('yourid')
    if (endpointMissing) {
      setStatus({ state: 'error', note: 'Form endpoint missing. Set VITE_FORMSPREE_ENDPOINT in your .env.' })
      return
    }

    setStatus({ state: 'submitting', note: 'Sending...' })
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Network response was not ok')
      setStatus({ state: 'success', note: 'Message sent! I will get back to you shortly.' })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({ state: 'error', note: 'Failed to send. Please try again.' })
    }
  }

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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
              Name *
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
              Email *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
              Phone *
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                placeholder="+1 (000) 000-0000"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                placeholder="Project, timeline, or goals..."
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status.state === 'submitting'}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-2 border-purple-400/60 shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status.state === 'submitting' ? 'Sending...' : 'Send message'}
          </button>

          {status.note && (
            <p className={`text-sm font-semibold ${status.state === 'success' ? 'text-emerald-300' : 'text-pink-200'}`}>
              {status.note}
            </p>
          )}
        </form>

        <div className="lg:col-span-2 flex flex-col gap-4 bg-gradient-to-br from-white/10 via-purple-500/10 to-blue-500/10 border border-white/15 rounded-2xl p-5 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/90 text-sm font-semibold">Prefer direct contact?</div>
              <div className="text-white/60 text-xs font-medium">Tap a card to call, email, or connect instantly.</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 blur-md"></div>
          </div>

          <div className="flex flex-col gap-3">
            <a className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white hover:border-purple-300/60 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/30" href="tel:+12175120363">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold shadow-md">📞</span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">Call / Text</span>
                  <span className="text-xs text-white/70 group-hover:text-white/90">+1 (217) 512-0363</span>
                </span>
              </span>
              <span className="text-white/60 group-hover:text-white">→</span>
            </a>

            <a className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white hover:border-purple-300/60 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/30" href="mailto:mohithmunagala14@gmail.com">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-md">✉️</span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">Email</span>
                  <span className="text-xs text-white/70 group-hover:text-white/90">mohithmunagala14@gmail.com</span>
                </span>
              </span>
              <span className="text-white/60 group-hover:text-white">→</span>
            </a>

            <a className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white hover:border-purple-300/60 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/30" href="https://www.linkedin.com/in/mohith-munagala-48179b1b1/" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-md">in</span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">LinkedIn</span>
                  <span className="text-xs text-white/70 group-hover:text-white/90">Connect professionally</span>
                </span>
              </span>
              <span className="text-white/60 group-hover:text-white">→</span>
            </a>

            <a className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white hover:border-purple-300/60 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/30" href="https://github.com/reddy771616" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-slate-700 to-purple-500 text-white font-bold shadow-md">GH</span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">GitHub</span>
                  <span className="text-xs text-white/70 group-hover:text-white/90">View cloud & DevOps work</span>
                </span>
              </span>
              <span className="text-white/60 group-hover:text-white">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
