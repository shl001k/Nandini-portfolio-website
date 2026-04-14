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
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

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
      setDisplayText(
        isDeleting
          ? role.slice(0, displayText.length - 1)
          : role.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className="gold-text font-serif">
      {displayText}
      <span className="typewriter-cursor text-[hsl(38_92%_50%)]">|</span>
    </span>
  );
}

function AnimatedOrb() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Pulsing rings */}
      {[200, 300, 400, 500, 600].map((size, i) => (
        <div
          key={size}
          className="absolute rounded-full border"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderColor: i % 2 === 0
              ? "hsl(38 92% 50% / 0.15)"
              : "hsl(280 60% 65% / 0.12)",
            animation: `spin ${10 + i * 4}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
          }}
        />
      ))}

      {/* Central morphing orb */}
      <div
        className="relative w-48 h-48 rounded-full float"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, hsl(42 95% 70%), hsl(38 92% 50%) 40%, hsl(280 60% 50%) 80%, hsl(220 60% 30%))",
          boxShadow:
            "0 0 60px hsl(38 92% 50% / 0.5), 0 0 120px hsl(38 92% 50% / 0.2), inset 0 0 40px hsl(42 95% 70% / 0.3)",
          filter: "blur(0px)",
        }}
      >
        {/* Shine */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, white 0%, transparent 50%)",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Floating particles around orb */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * 360;
        const radius = 140 + Math.random() * 60;
        const size = 2 + Math.random() * 4;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor:
                i % 3 === 0
                  ? "hsl(38 92% 50%)"
                  : i % 3 === 1
                  ? "hsl(280 60% 65%)"
                  : "hsl(45 30% 90%)",
              transform: `rotate(${angle}deg) translateX(${radius}px)`,
              opacity: 0.6 + Math.random() * 0.4,
              animation: `orbit ${6 + i * 0.5}s linear infinite`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes orbit {
          from { transform: rotate(var(--start-angle, 0deg)) translateX(150px) rotate(0deg); }
          to { transform: rotate(calc(var(--start-angle, 0deg) + 360deg)) translateX(150px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-noise"
    >
      {/* Animated 3D-style orb - CSS based */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-90">
        <AnimatedOrb />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_20%_6%)] via-[hsl(220_20%_6%_/_0.92)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(220_20%_6%)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[hsl(38_92%_50%_/_0.3)] bg-[hsl(38_92%_50%_/_0.05)] text-[hsl(38_92%_50%)] text-sm tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38_92%_50%)] animate-pulse" />
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
            <span
              className="glitch-text block text-white"
              data-text="Nandini"
            >
              Nandini
            </span>
            <span
              className="glitch-text block gold-text"
              data-text="Agarwal"
            >
              Agarwal
            </span>
          </h1>

          {/* Role */}
          <div className="text-2xl md:text-3xl font-light text-white/70 mb-8 h-12 flex items-center">
            <TypewriterText />
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
            Versatile media professional with hands-on experience in digital journalism,
            print design, interview hosting, and multimedia storytelling. Crafting stories
            that move people.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { num: "20+", label: "Published Articles" },
              { num: "10+", label: "Newspapers Designed" },
              { num: "10+", label: "Interviews Hosted" },
              { num: "2", label: "Book Chapters" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-serif gold-text font-bold">{stat.num}</div>
                <div className="text-xs text-white/40 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-[hsl(38_92%_50%)] text-[hsl(220_20%_6%)] font-semibold rounded-full hover:bg-[hsl(42_95%_65%)] transition-all duration-300 text-sm tracking-wider uppercase flex items-center gap-2"
            >
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:nandiniagarwal0012@gmail.com"
              className="px-8 py-4 border border-white/20 text-white/70 hover:border-[hsl(38_92%_50%)] hover:text-[hsl(38_92%_50%)] transition-all duration-300 rounded-full text-sm tracking-wider uppercase"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[hsl(38_92%_50%_/_0.5)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
