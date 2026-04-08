'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const founders = [
  {
    name: 'Dr Sarvesh Kumar',
    role: 'Co-Founder',
    initials: 'SK',
    linkedin: 'https://www.linkedin.com/in/sarveshkumarphd/',
    bio: 'PhD in Atomic & Molecular Physics (Universidade Nova de Lisboa), Postdoctoral Fellow at Lawrence Berkeley National Laboratory. His expertise in light-matter interaction and precision optical measurement directly underpins LaseQ Comm\'s interrogation hardware. Also leads the company\'s scientific strategy and research partnerships.',
  },
  {
    name: 'Dr Tanwee Das De',
    role: 'Co-Founder',
    initials: 'TD',
    linkedin: 'https://www.linkedin.com/in/tanwee-das-de-29b42b230/',
    bio: 'PhD in Biotechnology (Delhi Technological University), DST-Inspire Faculty at ICMR-National Institute of Virology. Over 11 years of research experience spanning IISER Pune and the Swedish University of Agricultural Sciences. Drives LaseQ Comm\'s research strategy and scientific partnerships.',
  },
  {
    name: 'Denesh Nallur Narasimman',
    role: 'Co-Founder',
    initials: 'DN',
    linkedin: 'https://www.linkedin.com/in/deneshn',
    bio: 'Hardware engineer and business lead, MEng in Robotics (University of Maryland). Built sensing and perception systems across autonomous vehicles, robotics, and deep-tech R&D. Specialises in taking unsolved hardware problems from first principles to working prototype, while driving commercial strategy and investor relations.',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Founding Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-cyan-400 mb-4 block">
            The Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Founding Team
          </h2>
        </motion.div>

        <div className="flex flex-col max-w-2xl mx-auto gap-5 mb-24">
          {founders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="gradient-border rounded-2xl bg-[#061428] p-8 flex items-start gap-6 hover:bg-[#071830] transition-colors"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-400 text-lg font-bold tracking-wide">
                  {person.initials}
                </span>
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base mb-0.5">{person.name}</h3>
                <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-3">
                  {person.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-xs w-fit"
                >
                  <ExternalLink size={13} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Advisors
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            We are assembling a world-class advisory board spanning photonics,
            defense, infrastructure, and deep tech investment.
          </p>
        </motion.div>

        <div className="flex flex-col max-w-2xl mx-auto gap-5">
          {/* Dr Subhadeep De */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border rounded-2xl bg-[#061428] p-8 flex items-start gap-6 hover:bg-[#071830] transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 text-lg font-bold tracking-wide">SD</span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="text-white font-semibold text-base mb-0.5">Dr Subhadeep De</h3>
              <p className="text-cyan-400 text-xs font-medium tracking-widest uppercase mb-3">Advisor</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Professor at IUCAA, Pune, with a doctorate from the University of Groningen and postdoctoral research at the Joint Quantum Institute, University of Maryland. A precision measurement physicist specialising in ultra-stable narrow-linewidth lasers, photonic quantum sensors, and trapped-ion technologies — expertise that sits at the core of LaseQ Comm's interrogation hardware.
              </p>
              <a
                href="https://www.linkedin.com/in/subhadeep-de-00718b15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-xs w-fit"
              >
                <ExternalLink size={13} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-border rounded-2xl bg-[#061428] p-8 flex items-center gap-6 opacity-40"
          >
            <div className="w-16 h-16 rounded-full border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-500/40 text-2xl font-bold">?</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">More advisors joining soon</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
