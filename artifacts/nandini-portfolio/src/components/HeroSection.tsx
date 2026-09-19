import { useEffect, useRef, useState } from "react";

const roles = [
  "Journalist",
  "Content Creator",
  "Interview Host",
  "Newspaper Designer",
  "Book Author",
  "Voice Over Artist",
  "Storyteller",
];

function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const role = roles[currentRole];
    if (!isDeleting && displayText === role) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }
    const speed = isDeleting ? 60 : 100;
    timeoutRef.current = setTimeout(() => {
      setDisplayText(isDeleting ? role.slice(0, displayText.length - 1) : role.slice(0, displayText.length + 1));
    }, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className="gold-text font-serif">
      {displayText}
      <span className="typewriter-cursor" style={{ color: "hsl(35 85% 42%)" }}>|</span>
    </span>
  );
}

/* ---- MEDIA ANIMATION: Camera Aperture + Film Strip + Floating Tools ---- */
function MediaAnimation() {
  return (
    <div className="w-full h-full relative flex items-center justify-center select-none">

      {/* ── Film strips ── */}
      <div className="absolute left-8 top-0 h-full w-10 overflow-hidden opacity-20 pointer-events-none">
        <div style={{ animation: "filmRoll 8s linear infinite" }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="mb-1">
              <div className="w-10 h-14 bg-stone-700 rounded-sm flex items-center justify-center">
                <div className="w-7 h-10 bg-stone-200 rounded-sm opacity-60" />
              </div>
              <div className="flex justify-between px-0.5 mt-0.5 mb-0.5">
                {[...Array(4)].map((_, j) => <div key={j} className="w-1.5 h-1.5 bg-stone-500 rounded-full" />)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 top-0 h-full w-10 overflow-hidden opacity-20 pointer-events-none">
        <div style={{ animation: "filmRollReverse 10s linear infinite" }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="mb-1">
              <div className="w-10 h-14 bg-amber-800 rounded-sm flex items-center justify-center">
                <div className="w-7 h-10 bg-amber-100 rounded-sm opacity-60" />
              </div>
              <div className="flex justify-between px-0.5 mt-0.5 mb-0.5">
                {[...Array(4)].map((_, j) => <div key={j} className="w-1.5 h-1.5 bg-amber-600 rounded-full" />)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Camera aperture / lens ── */}
      <div className="relative w-72 h-72 float">
        {/* Outer lens ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-stone-300"
          style={{ boxShadow: "0 0 0 2px hsl(35 85% 42% / 0.3), inset 0 0 30px hsl(35 85% 42% / 0.08)" }}
        />
        {/* Rotating aperture blades SVG */}
        <div className="absolute inset-4" style={{ animation: "aperture 4s ease-in-out infinite" }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <radialGradient id="lensGrad" cx="40%" cy="40%">
                <stop offset="0%" stopColor="hsl(38 90% 70%)" stopOpacity="0.25" />
                <stop offset="60%" stopColor="hsl(35 85% 42%)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(25 20% 12%)" stopOpacity="0.05" />
              </radialGradient>
            </defs>
            {/* Aperture blades - 8 leaf shapes */}
            {[...Array(8)].map((_, i) => (
              <ellipse
                key={i}
                cx="100" cy="100"
                rx="30" ry="55"
                fill="hsl(35 85% 42% / 0.18)"
                stroke="hsl(35 85% 42% / 0.35)"
                strokeWidth="0.5"
                transform={`rotate(${i * 45} 100 100)`}
                style={{ transformOrigin: "100px 100px" }}
              />
            ))}
            {/* Lens circle */}
            <circle cx="100" cy="100" r="52" fill="url(#lensGrad)" />
            <circle cx="100" cy="100" r="52" fill="none" stroke="hsl(35 85% 42%)" strokeWidth="1.5" opacity="0.4" />
            {/* Inner lens */}
            <circle cx="100" cy="100" r="32" fill="hsl(38 40% 97% / 0.9)" />
            <circle cx="100" cy="100" r="32" fill="none" stroke="hsl(35 85% 42%)" strokeWidth="1" opacity="0.3" />
            {/* Shine spot */}
            <ellipse cx="82" cy="82" rx="10" ry="7" fill="white" opacity="0.5" transform="rotate(-20 82 82)" />
          </svg>
        </div>

        {/* Centre camera icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-14 h-14 text-stone-600 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Tick marks around outer ring */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          style={{ animation: "spin 20s linear infinite" }}>
          {[...Array(36)].map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const r1 = 142, r2 = i % 3 === 0 ? 130 : 136;
            return (
              <line
                key={i}
                x1={150 + r1 * Math.cos(angle)}
                y1={150 + r1 * Math.sin(angle)}
                x2={150 + r2 * Math.cos(angle)}
                y2={150 + r2 * Math.sin(angle)}
                stroke="hsl(35 85% 42%)"
                strokeWidth={i % 3 === 0 ? 2 : 1}
              />
            );
          })}
        </svg>
      </div>

      {/* ── Floating media tools ── */}
      {/* Pen / Writing */}
      <div
        className="absolute top-16 left-1/4 bg-white border border-stone-200 shadow-md rounded-xl px-3 py-2 flex items-center gap-2 float"
        style={{ animationDelay: "0s" }}
      >
        <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span className="text-xs font-medium text-stone-600">News Writing</span>
      </div>

      {/* Microphone */}
      <div
        className="absolute top-1/4 right-12 bg-white border border-stone-200 shadow-md rounded-xl px-3 py-2 flex items-center gap-2 float"
        style={{ animationDelay: "1.5s" }}
      >
        <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
        <span className="text-xs font-medium text-stone-600">Interview Host</span>
      </div>

      {/* Newspaper */}
      <div
        className="absolute bottom-1/4 left-12 bg-white border border-stone-200 shadow-md rounded-xl px-3 py-2 flex items-center gap-2 float"
        style={{ animationDelay: "3s" }}
      >
        <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <span className="text-xs font-medium text-stone-600">Newspaper Design</span>
      </div>

      {/* Book */}
      <div
        className="absolute bottom-16 right-1/4 bg-white border border-stone-200 shadow-md rounded-xl px-3 py-2 flex items-center gap-2 float"
        style={{ animationDelay: "2s" }}
      >
        <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <span className="text-xs font-medium text-stone-600">Book Author</span>
      </div>

      {/* Soundwave bars beneath mic tag */}
      <div
        className="absolute top-1/3 right-16 flex items-end gap-0.5 float"
        style={{ animationDelay: "0.8s" }}
      >
        {[12, 20, 14, 28, 18, 24, 10, 22, 16].map((h, i) => (
          <div
            key={i}
            className="w-1 bg-rose-400 rounded-full opacity-70"
            style={{
              height: `${h}px`,
              animation: `waveBar 1.2s ${i * 0.1}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Headline snippet floating */}
      <div
        className="absolute top-1/2 left-6 -translate-y-1/2 float opacity-40 pointer-events-none"
        style={{ animationDelay: "4s" }}
      >
        <div className="font-serif text-xs text-stone-700 border-l-2 border-amber-500 pl-2 leading-tight max-w-[90px]">
          <div className="font-bold text-sm mb-1">BREAKING</div>
          <div>Supreme Court orders...</div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes waveBar {
          from { transform: scaleY(0.4); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}

/* ---- MEDIA ANIMATION V2: an interactive editorial story desk ---- */
function EditorialMediaAnimation({ mousePos }: { mousePos: { x: number; y: number } }) {
  const orbitCards = [
    { label: "FIELD NOTES", detail: "Delhi NCR · 06:42", className: "story-card story-card-notes", accent: "amber" },
    { label: "ON AIR", detail: "Interview / live", className: "story-card story-card-air", accent: "rose" },
    { label: "THE DAILY", detail: "Page 01 · 2026", className: "story-card story-card-paper", accent: "ink" },
  ];

  return (
    <div className="media-stage w-full h-full relative flex items-center justify-center select-none pointer-events-none">
      <div className="media-grid absolute inset-8 rounded-[2rem] opacity-70" />
      <div className="media-glow absolute w-[25rem] h-[25rem] rounded-full" />

      <div className="media-corner-label absolute top-12 right-10 sm:right-16">
        <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
        LIVE STORY DESK
      </div>
      <div className="media-index absolute bottom-16 left-10 sm:left-16">
        <span>NA / 001</span>
        <span className="media-index-line" />
        <span>MEDIA · VOICE · PRINT</span>
      </div>

      <div className="film-column film-column-left">
        <div className="film-column-track">
          {[...Array(14)].map((_, i) => (
            <div className="film-frame" key={i}>
              <span className="film-frame-image" style={{ backgroundImage: i % 3 === 0 ? "url('/nandini.jpeg')" : undefined }}>
                {i % 3 !== 0 && <span className="film-frame-lines" />}
              </span>
              <span className="film-sprockets"><i /><i /><i /><i /></span>
            </div>
          ))}
        </div>
      </div>
      <div className="film-column film-column-right">
        <div className="film-column-track">
          {[...Array(14)].map((_, i) => (
            <div className="film-frame" key={i}>
              <span className="film-frame-image film-frame-image-warm"><span className="film-frame-lines" /></span>
              <span className="film-sprockets"><i /><i /><i /><i /></span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="story-lens"
        style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.45}px), calc(-50% + ${mousePos.y * 0.45}px))` }}
      >
        <div className="story-lens-orbit story-lens-orbit-one" />
        <div className="story-lens-orbit story-lens-orbit-two" />
        <div className="story-lens-radar" />
        <div className="story-lens-glass">
          <img src="/nandini.jpeg" alt="Nandini Agarwal" />
          <div className="story-lens-sheen" />
          <div className="story-lens-crosshair story-lens-crosshair-horizontal" />
          <div className="story-lens-crosshair story-lens-crosshair-vertical" />
          <div className="story-lens-caption">STORY<br /><strong>IN FOCUS</strong></div>
        </div>
        <div className="story-lens-aperture">
          {[...Array(6)].map((_, i) => <span key={i} style={{ transform: `rotate(${i * 60}deg)` }} />)}
        </div>
        <div className="story-lens-tickmarks">
          {[...Array(24)].map((_, i) => <span key={i} style={{ transform: `rotate(${i * 15}deg)` }} />)}
        </div>
      </div>

      <div className="story-card-layer" style={{ transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)` }}>
        {orbitCards.map((card) => (
          <div key={card.label} className={`${card.className} ${card.accent}`}>
            <div className="story-card-topline"><span /> {card.label}</div>
            <div className="story-card-detail">{card.detail}</div>
            {card.accent === "rose" && (
              <div className="mini-wave">
                {[8, 16, 11, 22, 14, 19, 9, 17, 12].map((height, i) => <i key={i} style={{ height }} />)}
              </div>
            )}
            {card.accent === "ink" && <div className="mini-headline">THE<br /><em>NEW</em><br />ANGLE</div>}
          </div>
        ))}
      </div>

      <div className="editorial-signal editorial-signal-left">
        <span className="signal-dot" />
        <span className="signal-line" />
        <span className="signal-copy">LOOK<br />LISTEN<br />REPORT</span>
      </div>
      <div className="editorial-signal editorial-signal-right">
        <span className="signal-copy">AUDIO<br />VISUAL<br />TEXT</span>
        <span className="signal-line" />
        <span className="signal-dot" />
      </div>

      <div className="media-ticker absolute bottom-8 left-1/2 -translate-x-1/2">
        <span>JOURNALISM</span><b>×</b><span>STORYTELLING</span><b>×</b><span>CONVERSATIONS</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-editorial"
      style={{ background: "hsl(38 40% 97%)" }}
    >
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 90% 80%) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(340 75% 75%) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      {/* Media Animation — right side */}
      <div className="absolute right-0 top-0 w-full md:w-[52%] h-full">
        <EditorialMediaAnimation mousePos={mousePos} />
      </div>

      {/* Light gradient overlay so left content is legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(38_40%_97%)] via-[hsl(38_40%_97%_/_0.92)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(38_40%_97%)] to-transparent" />

      {/* Content */}
      <div className="hero-frame relative z-10 w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">
        <div className="hero-copy w-full md:w-[54%] max-w-[620px]">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-400/50 bg-amber-50 text-amber-700 text-sm tracking-widest uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Media Professional · Delhi NCR
          </div>

          {/* Name */}
          <h1
            className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-4"
            style={{
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            <span className="glitch-text block text-stone-800" data-text="Nandini">Nandini</span>
            <span className="glitch-text block gold-text" data-text="Agarwal">Agarwal</span>
          </h1>

          {/* Role */}
          <div className="text-2xl md:text-3xl font-light text-stone-500 mb-8 h-12 flex items-center">
            <TypewriterText />
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-stone-500 leading-relaxed mb-10 max-w-lg">
            Versatile media professional with hands-on experience in digital journalism,
            print design, interview hosting, and multimedia storytelling. Crafting stories
            that move people.
          </p>

          {/* Stats */}
          <div className="hero-stats-grid grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6 mb-10">
            {[
              { num: "20+", label: "Published Articles" },
              { num: "10+", label: "Newspapers Designed" },
              { num: "10+", label: "Interviews Hosted" },
              { num: "2", label: "Book Chapters" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-serif gold-text font-bold">{stat.num}</div>
                <div className="text-xs text-stone-400 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group px-8 py-4 bg-[hsl(35_85%_42%)] text-white font-semibold rounded-full hover:bg-[hsl(35_85%_36%)] transition-all duration-300 text-sm tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-amber-700/20"
            >
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:nandiniagarwal0012@gmail.com"
              className="px-8 py-4 border-2 border-stone-300 text-stone-600 hover:border-[hsl(35_85%_42%)] hover:text-[hsl(35_85%_42%)] transition-all duration-300 rounded-full text-sm tracking-wider uppercase font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-stone-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-amber-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
