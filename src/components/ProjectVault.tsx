import { useEffect, useRef, useState } from 'react';
import React from 'react';
import type { MouseEvent } from 'react';
import { ExternalLink, Github } from 'lucide-react';

/* ════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════ */
interface VaultProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  floatClass: 'vault-float-a' | 'vault-float-b' | 'vault-float-c';
  floatDelay: string;
  revealDelay: number;
  depthTier: 1 | 2 | 3;
}

const VAULT_PROJECTS: VaultProject[] = [
  {
    id: 'vault-01',
    title: 'AI Resume Builder',
    category: 'AI Product',
    description: 'Intelligent resume generation powered by LLMs. Parses job descriptions and tailors content in real-time with contextual awareness.',
    tech: ['React', 'OpenAI API', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-a',
    floatDelay: '0s',
    revealDelay: 0,
    depthTier: 1,
  },
  {
    id: 'vault-02',
    title: 'Motion UI Kit',
    category: 'Design System',
    description: 'A library of 40+ animated React components. Spring physics, stagger patterns, and gesture-driven interactions.',
    tech: ['React', 'Framer Motion', 'Storybook', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-b',
    floatDelay: '-2s',
    revealDelay: 120,
    depthTier: 3,
  },
  {
    id: 'vault-03',
    title: 'Crypto Dashboard',
    category: 'Data Interface',
    description: 'Real-time crypto analytics with live WebSocket feeds, interactive candlestick charts, and portfolio tracking.',
    tech: ['React', 'TypeScript', 'Chart.js', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-c',
    floatDelay: '-4s',
    revealDelay: 240,
    depthTier: 2,
  },
  {
    id: 'vault-04',
    title: '3D Product Viewer',
    category: 'WebGL / Three.js',
    description: 'Photorealistic product configurator. Real-time material swaps, HDR lighting, and shadow maps at 60fps.',
    tech: ['Three.js', 'React Three Fiber', 'GLSL', 'Vite'],
    image: 'https://images.unsplash.com/photo-1617957743098-4a98773c6a8a?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-a',
    floatDelay: '-1.5s',
    revealDelay: 360,
    depthTier: 1,
  },
  {
    id: 'vault-05',
    title: 'SaaS Landing Page',
    category: 'Marketing UI',
    description: 'Conversion-optimised landing with bento grid layout, scroll-driven animations, and A/B test-ready components.',
    tech: ['Next.js', 'Tailwind V4', 'Motion', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-b',
    floatDelay: '-3s',
    revealDelay: 480,
    depthTier: 3,
  },
  {
    id: 'vault-06',
    title: 'Neural Art Gallery',
    category: 'Creative Build',
    description: 'Generative art system using Canvas API and neural style transfer. Each artwork is procedurally unique.',
    tech: ['Canvas API', 'WebGL', 'TensorFlow.js', 'React'],
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-c',
    floatDelay: '-5s',
    revealDelay: 600,
    depthTier: 2,
  },
  {
    id: 'vault-07',
    title: 'CLI Dev Toolkit',
    category: 'Developer Tools',
    description: 'Terminal-first toolkit: scaffold projects, manage env files, run audit checks, and deploy in one command.',
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Ink'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-a',
    floatDelay: '-2.5s',
    revealDelay: 720,
    depthTier: 1,
  },
  {
    id: 'vault-08',
    title: 'Design → Code AI',
    category: 'AI Product',
    description: 'Figma-to-production pipeline powered by GPT-4 Vision. Converts design frames into clean, accessible React components.',
    tech: ['GPT-4 Vision', 'Figma API', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://github.com/ShibamPandab',
    githubUrl: 'https://github.com/ShibamPandab',
    floatClass: 'vault-float-b',
    floatDelay: '-6s',
    revealDelay: 840,
    depthTier: 3,
  },
];

/**
 * Mathematically balanced point-symmetric layout — [left%, top%]
 * All cards are perfectly balanced around the central golden nucleus at (50% left, 50% top).
 * The positions are symmetric such that left_A + left_B = 80% and top_A + top_B = 68%
 * which places the exact center of mass at (50%, 50%).
 * Spacing has been carefully maximized to prevent overlaps or collisions at any viewport width.
 */
const POSITIONS: [string, string][] = [
  ['1%',   '1%'],   // 01 — outer top-left,      depth 1
  ['80%',  '1%'],   // 02 — outer top-right,     depth 3
  ['1%',   '69%'],  // 03 — outer bottom-left,   depth 2
  ['80%',  '69%'],  // 04 — outer bottom-right,  depth 1
  ['18%',  '35%'],  // 05 — mid-left,            depth 3
  ['63%',  '35%'],  // 06 — mid-right,           depth 2
  ['41%',  '5%'],   // 07 — inner top-center,    depth 1
  ['40%',  '65%'],  // 08 — inner bottom-center, depth 3
];

/** Parallax travel distance (px) per depth tier for a full mouse excursion */
const PARALLAX_PX: Record<1 | 2 | 3, number> = { 1: 28, 2: 16, 3: 7 };

/* ════════════════════════════════════════════════════
   NUCLEUS
════════════════════════════════════════════════════ */
function GoldenNucleus() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 94,
        height: 94,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Outermost diffuse bloom */}
      <div style={{
        position: 'absolute', inset: -85, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)',
        animation: 'nucleus-halo 7s ease-in-out infinite',
      }} />
      {/* Secondary bloom */}
      <div style={{
        position: 'absolute', inset: -48, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)',
        animation: 'nucleus-halo 5s ease-in-out infinite',
        animationDelay: '-2.5s',
      }} />
      {/* Dashed outer orbit ring */}
      <div style={{
        position: 'absolute', inset: -34, borderRadius: '50%',
        border: '1px dashed rgba(212,175,55,0.18)',
        animation: 'nucleus-spin-cw 32s linear infinite',
      }} />
      {/* Solid mid ring */}
      <div style={{
        position: 'absolute', inset: -19, borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.30)',
        animation: 'nucleus-spin-ccw 20s linear infinite',
      }} />
      {/* Tight inner ring with pulse */}
      <div style={{
        position: 'absolute', inset: -7, borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.55)',
        animation: 'nucleus-ring 3.5s ease-in-out infinite',
      }} />
      {/* Core orb glow */}
      <div className="vault-nucleus-core" />
      {/* Hot centre point */}
      <div style={{
        position: 'absolute', inset: '36%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,235,120,1) 0%, rgba(212,175,55,0.7) 55%, transparent 100%)',
        filter: 'blur(0.5px)',
      }} />
      {/* Label */}
      <div style={{
        position: 'absolute', top: 98, left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 8,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(212,175,55,0.45)',
        userSelect: 'none',
      }}>
        Creative Engine
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   VAULT CARD (pure display — no animation state here)
════════════════════════════════════════════════════ */
interface CardProps {
  key?: React.Key;
  project: VaultProject;
  index: number;
  /** outer wrapper ref (position + parallax target) */
  wrapperRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

function VaultCard({ project, index, wrapperRef, isVisible }: CardProps) {
  const cardEl = useRef<HTMLDivElement>(null);
  const spotlightEl = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardEl.current || !spotlightEl.current) return;
    const r = cardEl.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    spotlightEl.current.style.background = `radial-gradient(ellipse 130px 100px at ${x}% ${y}%, rgba(212,175,55,0.09) 0%, transparent 100%)`;
  };

  const onMouseEnter = () => {
    if (!spotlightEl.current) return;
    spotlightEl.current.style.opacity = '1';
  };

  const onMouseLeave = () => {
    if (!spotlightEl.current) return;
    spotlightEl.current.style.opacity = '0';
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    /*
     * 3-layer architecture:
     *   wrapperDiv  — absolute position in universe + parallax transform (updated by rAF)
     *     floatDiv  — CSS float animation (translateY drift)
     *       cardDiv — visual glass card + hover interactions
     */
    <div
      ref={wrapperRef}
      data-vault-id={project.id}
      style={{
        position: 'absolute',
        left: POSITIONS[index][0],
        top: POSITIONS[index][1],
        width: 'clamp(242px, 19vw, 285px)',
        zIndex: project.depthTier === 1 ? 9 : project.depthTier === 2 ? 7 : 5,
        /* parallax applied via el.style.transform in rAF loop */
      }}
    >
      {/* Float animation wrapper — isolated from parallax */}
      <div
        className={project.floatClass}
        style={{ animationDelay: project.floatDelay }}
      >
        {/* Scroll-reveal wrapper */}
        <div
          className={`vault-card-reveal${isVisible ? ' is-visible' : ''}`}
          style={{ animationDelay: `${project.revealDelay}ms` }}
        >
          {/* Visual card */}
          <div
            ref={cardEl}
            className="vault-card interactive-cursor"
            style={{ position: 'relative' }}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* Cursor spotlight */}
            <div
              ref={spotlightEl}
              style={{
                position: 'absolute', inset: 0, borderRadius: 20,
                opacity: 0,
                transition: 'opacity 0.35s ease',
                pointerEvents: 'none',
                zIndex: 2,
                background: 'radial-gradient(ellipse 130px 100px at 50% 30%, rgba(212,175,55,0.08) 0%, transparent 100%)',
              }}
            />

            {/* Animated top gold border */}
            <div className="vault-card-top-border" />

            {/* ── Screenshot ── */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '50%', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.3) brightness(0.78)',
                  transition: 'filter 0.55s ease, transform 0.65s cubic-bezier(0.23,1,0.32,1)',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget;
                  img.style.filter = 'grayscale(0) brightness(1)';
                  img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget;
                  img.style.filter = 'grayscale(0.3) brightness(0.78)';
                  img.style.transform = 'scale(1)';
                }}
              />
              {/* Category chip */}
              <div style={{
                position: 'absolute', top: 10, left: 10, zIndex: 4,
                padding: '3px 10px',
                background: 'rgba(5,5,5,0.88)',
                border: '1px solid rgba(212,175,55,0.35)',
                borderRadius: 100,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 8, letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: '#D4AF37',
                backdropFilter: 'blur(8px)',
              }}>
                {project.category}
              </div>
              {/* Index badge */}
              <div style={{
                position: 'absolute', top: 10, right: 10, zIndex: 4,
                width: 22, height: 22, borderRadius: '50%',
                background: 'rgba(5,5,5,0.75)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 7, color: 'rgba(255,255,255,0.3)',
                backdropFilter: 'blur(6px)',
              }}>
                {pad(index + 1)}
              </div>
              {/* Fade-to-card bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.92), transparent)',
                pointerEvents: 'none', zIndex: 2,
              }} />
            </div>

            {/* ── Card body ── */}
            <div style={{ padding: '13px 15px 15px', position: 'relative', zIndex: 3 }}>
              <h3 style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 13, fontWeight: 700,
                color: '#fff', letterSpacing: '-0.01em',
                marginBottom: 5, lineHeight: 1.25,
              }}>
                {project.title}
              </h3>
              <p style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 10, color: 'rgba(255,255,255,0.42)',
                lineHeight: 1.65, marginBottom: 10,
              }}>
                {project.description}
              </p>

              {/* Tech pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 3, marginBottom: 11 }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '2px 7px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 100,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 7, letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.38)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 11 }} />

              {/* CTA row */}
              <div style={{ display: 'flex', gap: 7 }}>
                <a
                  href={project.liveUrl}
                  target="_blank" rel="noreferrer"
                  className="interactive-cursor"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                    padding: '7px 0',
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.28)',
                    borderRadius: 9,
                    fontFamily: '"Inter", sans-serif', fontWeight: 600,
                    fontSize: 8, letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: '#D4AF37', textDecoration: 'none',
                    transition: 'background 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.background = 'rgba(212,175,55,0.16)';
                    a.style.borderColor = 'rgba(212,175,55,0.55)';
                  }}
                  onMouseLeave={e => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.background = 'rgba(212,175,55,0.08)';
                    a.style.borderColor = 'rgba(212,175,55,0.28)';
                  }}
                >
                  <ExternalLink size={8} /> Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank" rel="noreferrer"
                  className="interactive-cursor"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                    padding: '7px 0',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 9,
                    fontFamily: '"Inter", sans-serif', fontWeight: 600,
                    fontSize: 8, letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                    transition: 'background 0.25s ease, border-color 0.25s ease, color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.background = 'rgba(255,255,255,0.07)';
                    a.style.borderColor = 'rgba(255,255,255,0.22)';
                    a.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    const a = e.currentTarget as HTMLAnchorElement;
                    a.style.background = 'rgba(255,255,255,0.03)';
                    a.style.borderColor = 'rgba(255,255,255,0.08)';
                    a.style.color = 'rgba(255,255,255,0.45)';
                  }}
                >
                  <Github size={8} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   MAIN SECTION
════════════════════════════════════════════════════ */
export default function ProjectVault() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const universeRef = useRef<HTMLDivElement>(null);

  // Refs to the position wrapper div of each card (parallax target)
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-reveal visibility
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());

  // Lerp-based parallax state
  const mouseTarget  = useRef({ x: 0, y: 0 });
  const mouseLerped  = useRef({ x: 0, y: 0 });
  const rafId        = useRef(0);
  const isMobile     = useRef(false);

  /* ── Scroll reveal via IntersectionObserver ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.vaultId;
            if (id) setVisibleIds(prev => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe each card's position wrapper
    wrapperRefs.current.forEach(el => { if (el) io.observe(el); });

    return () => io.disconnect();
  }, []);

  /* ── Mouse parallax with lerp ── */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    isMobile.current = mq.matches;
    const onMqChange = (e: MediaQueryListEvent) => { isMobile.current = e.matches; };
    mq.addEventListener('change', onMqChange);

    const onMouseMove = (e: MouseEvent) => {
      if (isMobile.current || !universeRef.current) return;
      const r = universeRef.current.getBoundingClientRect();
      // Normalise to -1 … +1 relative to universe centre
      mouseTarget.current.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouseTarget.current.y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    };

    const onSectionLeave = () => {
      mouseTarget.current.x = 0;
      mouseTarget.current.y = 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    sectionRef.current?.addEventListener('mouseleave', onSectionLeave, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      mouseLerped.current.x = lerp(mouseLerped.current.x, mouseTarget.current.x, 0.06);
      mouseLerped.current.y = lerp(mouseLerped.current.y, mouseTarget.current.y, 0.06);

      wrapperRefs.current.forEach((el, i) => {
        if (!el || isMobile.current) return;
        const tier = VAULT_PROJECTS[i].depthTier;
        const px = PARALLAX_PX[tier];
        const dx = mouseLerped.current.x * px;
        const dy = mouseLerped.current.y * px;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      sectionRef.current?.removeEventListener('mouseleave', onSectionLeave);
      mq.removeEventListener('change', onMqChange);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="project-vault"
      aria-label="Project Vault"
      style={{ position: 'relative', background: '#040404', overflow: 'hidden' }}
    >

      {/* ── Ambient background glows ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '10%', left: '-8%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.035) 0%, transparent 65%)',
          animation: 'vault-bg-pulse 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', right: '-6%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.030) 0%, transparent 65%)',
          animation: 'vault-bg-pulse 13s ease-in-out infinite',
          animationDelay: '-6s',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%)',
          animation: 'vault-bg-pulse 8s ease-in-out infinite',
          animationDelay: '-3s',
        }} />
      </div>

      {/* ── Section header ── */}
      <div style={{
        position: 'relative', zIndex: 20,
        maxWidth: 1280, margin: '0 auto',
        padding: '100px 40px 72px',
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          marginBottom: 18,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, letterSpacing: '0.26em',
            textTransform: 'uppercase' as const, color: '#D4AF37',
          }}>
            05 / Project Vault
          </span>
        </div>

        {/* Title + meta row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(38px, 5vw, 66px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1, color: '#fff',
              textTransform: 'uppercase' as const, margin: 0,
            }}>
              The{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Vault
              </span>
            </h2>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 15, color: 'rgba(255,255,255,0.38)',
              marginTop: 16, maxWidth: 500, lineHeight: 1.75,
            }}>
              A collection of experiments, client work, AI products, interfaces, and creative builds — suspended in digital space.
            </p>
          </div>

          {/* Live indicator */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 18px',
            border: '1px solid rgba(212,175,55,0.15)',
            borderRadius: 100,
            background: 'rgba(212,175,55,0.03)',
            backdropFilter: 'blur(8px)',
            flexShrink: 0,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#D4AF37',
              boxShadow: '0 0 10px rgba(212,175,55,0.9)',
              animation: 'nucleus-ring 2.5s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9, letterSpacing: '0.2em',
              textTransform: 'uppercase' as const,
              color: 'rgba(212,175,55,0.65)',
            }}>
              {VAULT_PROJECTS.length} Projects Orbiting
            </span>
          </div>
        </div>

        {/* Gold rule */}
        <div style={{
          marginTop: 36, width: 72, height: 1,
          background: 'linear-gradient(90deg, rgba(212,175,55,0.55), transparent)',
        }} />
      </div>

      {/* ════════════════════════════════════
          DESKTOP — Floating Universe
          ════════════════════════════════════ */}
      <div
        ref={universeRef}
        className="vault-universe-desktop"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          height: 1100,
          display: 'block',
        }}
      >
        <GoldenNucleus />

        {VAULT_PROJECTS.map((project, i) => (
          <VaultCard
            key={project.id + '-dk'}
            project={project}
            index={i}
            wrapperRef={(el: HTMLDivElement | null) => { wrapperRefs.current[i] = el; }}
            isVisible={visibleIds.has(project.id)}
          />
        ))}
      </div>

      {/* ════════════════════════════════════
          MOBILE — Stacked premium cards
          ════════════════════════════════════ */}
      <div
        className="vault-universe-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: 18,
          maxWidth: 480,
          margin: '0 auto',
          padding: '0 20px 80px',
        }}
      >
        {VAULT_PROJECTS.map((project, i) => (
          <MobileCard key={project.id + '-mk'} project={project} index={i} />
        ))}
      </div>

      {/* ── Bottom padding ── */}
      <div style={{ height: 80 }} className="vault-universe-desktop" />

      {/* ── Responsive rules ── */}
      <style>{`
        @media (min-width: 769px) {
          .vault-universe-desktop { display: block !important; }
          .vault-universe-mobile  { display: none !important; }
        }
        @media (max-width: 768px) {
          .vault-universe-desktop { display: none !important; }
          .vault-universe-mobile  { display: flex !important; }
        }
      `}</style>

    </section>
  );
}

/* ════════════════════════════════════════════════════
   MOBILE CARD — simplified, no parallax, no float
════════════════════════════════════════════════════ */
function MobileCard({ project, index }: { key?: React.Key; project: VaultProject; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`vault-card-reveal${visible ? ' is-visible' : ''}`}
      style={{ animationDelay: `${index * 80}ms`, position: 'relative' }}
    >
      <div
        className="vault-card"
        style={{ position: 'relative', width: '100%' }}
      >
        <div className="vault-card-top-border" />
        {/* Image */}
        <div style={{ position: 'relative', paddingTop: '50%', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', filter: 'brightness(0.78)',
              transition: 'transform 0.55s ease',
            }}
          />
          <div style={{
            position: 'absolute', top: 10, left: 10, zIndex: 4,
            padding: '3px 10px',
            background: 'rgba(5,5,5,0.88)',
            border: '1px solid rgba(212,175,55,0.35)',
            borderRadius: 100,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 8, letterSpacing: '0.18em',
            textTransform: 'uppercase' as const, color: '#D4AF37',
            backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
            background: 'linear-gradient(to top, rgba(10,10,10,0.92), transparent)',
            pointerEvents: 'none',
          }} />
        </div>
        {/* Body */}
        <div style={{ padding: '14px 16px 16px' }}>
          <h3 style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 14, fontWeight: 700, color: '#fff',
            letterSpacing: '-0.01em', marginBottom: 6, lineHeight: 1.2,
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 11, color: 'rgba(255,255,255,0.42)',
            lineHeight: 1.65, marginBottom: 10,
          }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 4, marginBottom: 12 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                padding: '2px 8px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 100,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 8, letterSpacing: '0.08em',
                textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.38)',
              }}>{t}</span>
            ))}
          </div>
          <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 12 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href={project.liveUrl} target="_blank" rel="noreferrer"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                padding: '8px 0',
                background: 'rgba(212,175,55,0.09)', border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: 10, fontFamily: '"Inter", sans-serif', fontWeight: 600,
                fontSize: 9, letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, color: '#D4AF37', textDecoration: 'none',
              }}
            >
              <ExternalLink size={9} /> Demo
            </a>
            <a
              href={project.githubUrl} target="_blank" rel="noreferrer"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                padding: '8px 0',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10, fontFamily: '"Inter", sans-serif', fontWeight: 600,
                fontSize: 9, letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
              }}
            >
              <Github size={9} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
