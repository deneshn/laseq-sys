'use client';

const items = [
  '100+ km sensing range',
  'Sub-metre spatial resolution',
  'Real-time AI classification',
  'Zero new infrastructure',
  'Pipeline · Rail · Border · Subsea',
  'Distributed Acoustic Sensing',
  'Phase-sensitive detection',
  'Deep Tech · Made in India',
  '24/7 continuous monitoring',
  'From city to seabed',
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="relative py-5 overflow-hidden border-y border-cyan-500/10 bg-[#020d1f]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020d1f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020d1f] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-xs font-medium tracking-widest uppercase">
            <span className="text-slate-500">{item}</span>
            <span className="text-cyan-500/40">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
