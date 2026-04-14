const contactLinks = [
  {
    label: "Email",
    value: "nandiniagarwal0012@gmail.com",
    href: "mailto:nandiniagarwal0012@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#b45309",
    bg: "#fef3c7",
  },
  {
    label: "Phone",
    value: "+91 9582001950",
    href: "tel:+919582001950",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "#be185d",
    bg: "#fce7f3",
  },
  {
    label: "Location",
    value: "Delhi-NCR, India",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "#047857",
    bg: "#d1fae5",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0a66c2",
    bg: "#dbeafe",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ background: "hsl(38 40% 97%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(340 75% 70%) 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 90% 60%) 0%, transparent 70%)", transform: "translate(-30%, 0)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800 mb-6">
            Let's <span className="gold-text">Collaborate</span>
          </h2>
          <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">
            Whether you're looking for a content writer, journalist, interview host, or creative collaborator —
            I'd love to bring your story to life. Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contact links */}
          <div className="space-y-4 stagger reveal">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-white border border-stone-200 rounded-2xl p-6 card-glow shadow-sm hover:border-stone-300 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ backgroundColor: link.bg, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs text-stone-400 tracking-widest uppercase mb-1 font-medium">{link.label}</div>
                  <div className="text-stone-700 group-hover:text-stone-900 transition-colors font-semibold text-sm">{link.value}</div>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: link.color }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Right panel */}
          <div className="reveal-right">
            <div className="bg-white border border-stone-200 rounded-3xl p-8 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-transparent" />
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(38 90% 60%), transparent)" }} />
              <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(340 75% 70%), transparent)" }} />

              <div className="relative">
                <div className="text-5xl mb-6">✨</div>
                <h3 className="text-2xl font-serif text-stone-800 mb-4">Open to Opportunities</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8">
                  Currently available for freelance projects, full-time roles, and collaborations
                  in journalism, content creation, newspaper design, and multimedia production.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "News Writing & Journalism",
                    "Content Strategy & Blogging",
                    "Newspaper & Print Design",
                    "Interview Hosting & Production",
                    "Voice Over & Short Films",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-stone-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:nandiniagarwal0012@gmail.com"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[hsl(35_85%_42%)] text-white font-semibold rounded-2xl hover:bg-[hsl(35_85%_36%)] transition-all duration-300 text-sm tracking-wider uppercase shadow-lg shadow-amber-700/20"
                >
                  Send a Message
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal mt-24 pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-serif gold-text font-bold">Nandini Agarwal</div>
          <p className="text-stone-300 text-xs text-center">© 2024 Nandini Agarwal · Journalist · Content Creator · Storyteller</p>
          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <a href="mailto:nandiniagarwal0012@gmail.com" className="hover:text-amber-600 transition-colors">Email</a>
            <span>·</span>
            <a href="tel:+919582001950" className="hover:text-amber-600 transition-colors">Phone</a>
            <span>·</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
