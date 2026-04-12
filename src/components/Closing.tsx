'use client';

import { useEffect, useRef } from 'react';
import { Mail, User } from 'lucide-react';

function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Smoke blob definitions — each has its own orbit and size
    const blobs = Array.from({ length: 10 }, (_, i) => ({
      baseX: 0.1 + (i / 10) * 0.9,
      baseY: 0.3 + Math.sin(i * 1.7) * 0.3,
      r: 0.15 + (i % 3) * 0.08,
      speed: 0.0003 + i * 0.00007,
      phase: i * 0.8,
      alpha: 0.04 + (i % 4) * 0.015,
    }));

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      // Draw each smoke blob
      blobs.forEach((b) => {
        const x = (b.baseX + Math.sin(t * b.speed * 1000 + b.phase) * 0.12) * W;
        const y = (b.baseY + Math.cos(t * b.speed * 800 + b.phase) * 0.1) * H;
        const r = b.r * W;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, `rgba(0, 20, 50, ${b.alpha * 3})`);
        grad.addColorStop(0.4, `rgba(0, 10, 30, ${b.alpha})`);
        grad.addColorStop(1, `rgba(0, 0, 0, 0)`);

        ctx.beginPath();
        ctx.ellipse(x, y, r, r * 0.6, Math.sin(t * 0.0002 + b.phase) * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Subtle cyan wisps
      for (let i = 0; i < 4; i++) {
        const wx = (0.2 + i * 0.22 + Math.sin(t * 0.0004 + i) * 0.08) * W;
        const wy = (0.5 + Math.cos(t * 0.0003 + i * 1.2) * 0.2) * H;
        const wr = 0.08 * W;
        const wg = ctx.createRadialGradient(wx, wy, 0, wx, wy, wr);
        wg.addColorStop(0, `rgba(0, 212, 255, 0.04)`);
        wg.addColorStop(1, `rgba(0, 212, 255, 0)`);
        ctx.beginPath();
        ctx.ellipse(wx, wy, wr, wr * 0.4, Math.cos(t * 0.0002 + i) * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = wg;
        ctx.fill();
      }

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />;
}

export default function Closing() {
  return (
    <section className="relative bg-[#010810] overflow-hidden">

      {/* Top — Let's Talk */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 border-b border-white/5">
        <p className="text-xs font-medium tracking-widest uppercase text-cyan-400 mb-4">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight">
          Let's Talk
        </h2>

        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Contact</p>
              <p className="text-white font-medium">Denesh Narasimman</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Mail size={16} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Email</p>
              <a
                href="mailto:denesh2898@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                denesh2898@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — Smoke + wordmark */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Large watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="text-[18vw] font-black text-white leading-none tracking-tighter"
            style={{ opacity: 0.04 }}
          >
            LASEQ
          </span>
        </div>

        {/* Smoke canvas on top */}
        <SmokeCanvas />

        {/* Bottom nav + copyright */}
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; 2026 LaseQ Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#technology" className="hover:text-cyan-400 transition-colors">Technology</a>
            <a href="#applications" className="hover:text-cyan-400 transition-colors">Applications</a>
            <a href="#team" className="hover:text-cyan-400 transition-colors">Team</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>

    </section>
  );
}
