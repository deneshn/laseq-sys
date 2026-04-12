'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    letter: 'D',
    word: 'Detection',
    description:
      'Sensing physical events — acoustic, seismic, and structural — with sufficient sensitivity to distinguish real events from environmental noise. The entry point of the intelligence chain.',
    technical: 'φ-OTDR · ≤100 kHz linewidth laser · sub-nanostrain sensitivity',
  },
  {
    letter: 'L',
    word: 'Localisation',
    description:
      'Determining precisely where along the fiber an event occurred. Sub-metre spatial resolution over distances exceeding 100 km. Without localisation, detection has no operational value.',
    technical: 'OTDR time-of-flight · interferometric phase analysis · <1m spatial resolution',
  },
  {
    letter: 'I',
    word: 'Identification',
    description:
      'Classifying the detected event into operationally meaningful categories — pipeline leak, human intrusion, train anomaly, structural failure. This is the AI layer that converts signal into meaning.',
    technical: 'Edge AI classification · acoustic signature library · real-time inference · no cloud required',
  },
  {
    letter: 'D',
    word: 'Decision',
    description:
      'Delivering operator-ready intelligence — prioritised alerts, confidence scores, and recommended responses. Not raw data. Actionable intelligence with context.',
    technical: 'Edge AI decision engine · operator dashboard · alert prioritisation · confidence scoring',
  },
];

export default function DLID() {
  return (
    <section id="dlid" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,30,60,0.5),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-cyan-400 mb-4 block">
            Our Technology Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            The DLID Framework
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Every LaseQ Systems system is built around a single four-word mandate:{' '}
            <span className="text-cyan-400 font-medium">Detect. Localise. Identify. Decide.</span>{' '}
            This is DLID — our technology philosophy and the engineering specification that every
            product must satisfy. It also names the underlying architecture:{' '}
            <span className="text-white font-medium">Distributed Laser Intelligence and Decision-making.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="gradient-border rounded-2xl bg-[#061428] p-7 flex flex-col hover:bg-[#071830] transition-colors"
            >
              {/* Large letter */}
              <span className="text-7xl font-black text-cyan-400 leading-none mb-4 select-none">
                {card.letter}
              </span>

              {/* Word */}
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                {card.word}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {card.description}
              </p>

              {/* Technical note */}
              <p className="font-mono text-[11px] text-cyan-500/50 leading-relaxed border-t border-cyan-500/10 pt-4">
                {card.technical}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 rounded-2xl bg-[#010810] border border-cyan-500/10 px-8 py-7 text-center"
        >
          <p className="text-cyan-400 font-semibold text-base md:text-lg tracking-wide">
            Detect · Localise · Identify · Decide
          </p>
          <p className="text-slate-500 text-sm mt-2 tracking-wide">
            Enabled by{' '}
            <span className="text-slate-400">Distributed Laser Intelligence and Decision-making</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
