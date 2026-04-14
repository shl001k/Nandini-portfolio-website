const newsArticles = [
  {
    title: "NEET-PG 2025 Postponed: Supreme Court Orders Single-Shift Exam Format",
    url: "https://imstoday.in/view/270/NEET-PG-2025-Postponed-Supreme-Court-Orders-Single-Shift-Exam-Format",
    category: "Education Policy",
    platform: "IMS Today",
  },
  {
    title: "UGC Issues Show-Cause Notice to Universities Over Anti-Ragging Rules Violation",
    url: "https://imstoday.in/view/296/UGC-Issues-Show-Cause-Notice-to-Universities-Over-Anti-Ragging-Rules-Violation",
    category: "Education",
    platform: "IMS Today",
  },
  {
    title: "DMRC Hikes Fares for Passengers for First Time After Eight Years",
    url: "https://imstoday.in/view/437/DMRC-hikes-fares-for-passengers-for-first-time-after-eight-years",
    category: "Urban Infrastructure",
    platform: "IMS Today",
  },
];

const interviews = [
  {
    guest: "Mr. Nand Kishore Aggarwal",
    url: "https://www.youtube.com/results?search_query=Pringles+Pop+English+20+Sec+IMS",
    about: "Chairman Emeritus of the Crystal Group. A leader, visionary and mentor with a keen business acumen.",
    format: "English",
    tag: "Business Leader",
  },
  {
    guest: "Mr. Amit Pandey",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Amit+Pandey+shakhsiyat",
    about: "CEO of Orient Cables, Founder & CEO of Super77. Chemical engineer with rich background spanning Automobile and Telecom sectors.",
    format: "Hindi",
    tag: "Entrepreneur",
  },
  {
    guest: "Mr. Ashish Jain",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Ashish+Jain+shakhsiyat",
    about: "Deputy Director General of FIEO. 26+ years experience in international trade promotion, travelled to 50+ countries.",
    format: "Hindi",
    tag: "Trade Expert",
  },
  {
    guest: "Mr. Rahul Agarwal",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Rahul+Agrawal+shakhsiyat",
    about: "Executive Director, Ghaziabad Management Association. Ex MD & CEO of Lenovo India. 25+ years experience.",
    format: "Hindi",
    tag: "Industry Leader",
  },
  {
    guest: "Priyanshi Lal",
    url: "https://www.youtube.com/results?search_query=IMS+TODAY+Priyanshi+Lal+sakshatkaar",
    about: "Alumnus of IMS Ghaziabad UCC. Brand & Social Media Marketing Lead at DNA, Zee Group.",
    format: "Hindi",
    tag: "Media Professional",
  },
];

const films = [
  {
    title: "Umeed Aur Uljhan",
    type: "Short Film",
    subtitle: "A Short Film on Student Life",
    url: "https://www.youtube.com/results?search_query=Umeed+Aur+Uljhan+short+film+student+life",
    role: "Actor & Voice-Over Artist",
    description: "A touching short film on student life where I contributed as both an actor and voice-over artist, bringing authentic emotional depth to the narrative.",
    award: "🥇 First Prize Winner",
    color: "#b45309",
    bg: "#fef3c7",
  },
  {
    title: "1930: A Short Film on AI",
    type: "Documentary",
    subtitle: "A Short Film on AI",
    url: "https://www.youtube.com/results?search_query=1930+short+film+AI",
    role: "Actor & Voice-Over Artist",
    description: "An exploratory documentary examining artificial intelligence through a historical lens.",
    color: "#7c3aed",
    bg: "#ede9fe",
  },
  {
    title: "Our Delhi, Our Pride?",
    type: "Documentary",
    subtitle: "A Documentary Film on Pollution",
    url: "https://www.youtube.com/results?search_query=Our+Delhi+Our+Pride+documentary+pollution",
    role: "Researcher",
    description: "A hard-hitting documentary on Delhi's pollution crisis. Contributed extensive research that shaped the documentary's factual foundation.",
    award: "🥉 Third Prize Winner",
    color: "#047857",
    bg: "#d1fae5",
  },
];

function ArticleCard({ article }: { article: typeof newsArticles[0] }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-stone-200 rounded-xl p-6 card-glow shadow-sm hover:border-amber-300"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
          {article.category}
        </span>
        <span className="text-xs text-stone-400">{article.platform}</span>
      </div>
      <h4 className="text-stone-700 text-sm leading-relaxed group-hover:text-stone-900 transition-colors mb-4 font-medium">
        {article.title}
      </h4>
      <div className="flex items-center gap-2 text-amber-600 text-xs group-hover:gap-3 transition-all font-medium">
        <span>Read Article</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}

function InterviewCard({ interview }: { interview: typeof interviews[0] }) {
  return (
    <a
      href={interview.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 bg-white border border-stone-200 rounded-xl p-5 card-glow shadow-sm hover:border-rose-300 w-full"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center shrink-0 text-lg font-serif text-stone-700 border border-stone-200">
        {interview.guest.charAt(interview.guest.indexOf(" ") + 1)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-stone-800 text-sm font-semibold group-hover:text-rose-700 transition-colors truncate">
            {interview.guest}
          </h4>
          <span className="text-xs px-2 py-0.5 rounded-full border border-stone-200 text-stone-400 ml-2 shrink-0 bg-stone-50">
            {interview.format}
          </span>
        </div>
        <p className="text-stone-400 text-xs leading-relaxed line-clamp-2">{interview.about}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
            {interview.tag}
          </span>
          <span className="text-xs text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium">Watch →</span>
        </div>
      </div>
    </a>
  );
}

function FilmCard({ film }: { film: typeof films[0] }) {
  return (
    <a
      href={film.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden card-glow shadow-sm"
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: film.color }} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-xs px-3 py-1 rounded-full border font-medium"
            style={{ color: film.color, borderColor: `${film.color}40`, backgroundColor: film.bg }}
          >
            {film.type}
          </span>
          {film.award && <span className="text-xs text-stone-500">{film.award}</span>}
        </div>

        <h4 className="text-xl font-serif text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">
          {film.title}
        </h4>
        <p className="text-xs text-stone-400 mb-3 font-mono">{film.subtitle}</p>

        <div className="text-xs font-semibold mb-4 px-3 py-1.5 rounded-lg w-fit" style={{ color: film.color, backgroundColor: film.bg }}>
          Role: {film.role}
        </div>

        <p className="text-stone-500 text-sm leading-relaxed">{film.description}</p>

        <div className="mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity font-medium" style={{ color: film.color }}>
          <span>Watch Film</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 90% 60%) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600 mb-4 block font-semibold">Portfolio of Work</span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-800">
            My <span className="gold-text">Projects</span>
          </h2>
        </div>

        {/* News Articles */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-base">✍️</div>
            <h3 className="text-2xl font-serif text-stone-800">News Articles</h3>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-xs text-stone-400">Multi-Platform · 4 Months</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article) => <ArticleCard key={article.title} article={article} />)}
          </div>
        </div>

        {/* Interviews */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-base">🎙️</div>
            <h3 className="text-2xl font-serif text-stone-800">Interview Hosting</h3>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-xs text-stone-400">IMS Today · 10+ Interviews</span>
          </div>
          <p className="text-stone-400 text-sm mb-6 max-w-2xl leading-relaxed">
            Managed the full interview lifecycle — research, question drafting, on-camera hosting, and post-production.
            Produced Hindi-language series <em className="text-stone-500">Shakhsiyat</em> and English segments for IMS Today's YouTube channel.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {interviews.map((interview) => <InterviewCard key={interview.guest} interview={interview} />)}
          </div>
        </div>

        {/* Films */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-9 h-9 rounded-full bg-violet-50 border border-violet-200 flex items-center justify-center text-base">🎬</div>
            <h3 className="text-2xl font-serif text-stone-800">Voice Over & Short Films</h3>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-xs text-stone-400">FTII Certified Production Training</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {films.map((film) => <FilmCard key={film.title} film={film} />)}
          </div>
        </div>

        {/* Newspaper Design */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-base">🗞️</div>
            <h3 className="text-2xl font-serif text-stone-800">Newspaper Design</h3>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-xs text-stone-400">10+ Layouts · Print & Digital</span>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-8 relative overflow-hidden shadow-sm">
            {/* Decorative layout lines */}
            <div className="absolute right-0 top-0 bottom-0 w-2/5 opacity-10 p-4">
              <div className="grid grid-cols-3 gap-1 h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded bg-stone-500" style={{ opacity: 0.3 + Math.random() * 0.7 }} />
                ))}
              </div>
            </div>
            <div className="relative max-w-lg">
              <p className="text-stone-500 leading-relaxed mb-6">
                Designing newspapers for both print and digital platforms, focusing on layout structuring,
                typography, and visual presentation. Work emphasizes creativity and effective design
                to enhance readability and audience reach.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Adobe InDesign", value: "Primary Tool" },
                  { label: "Adobe Photoshop", value: "Visual Editing" },
                  { label: "Layouts Designed", value: "10+" },
                ].map((item) => (
                  <div key={item.label} className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                    <div className="text-xs text-stone-400 mb-1">{item.label}</div>
                    <div className="text-sm text-emerald-700 font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
