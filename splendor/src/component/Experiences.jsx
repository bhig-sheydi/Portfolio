import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiPandas, SiPython, SiPostgresql, SiReact } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript />, level: 'Beginner' },
  { name: 'Python', icon: <SiPython />, level: 'Beginner' },
  { name: 'Java', icon: <FaJava />, level: 'Beginner' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Proficient' },
  { name: 'React', icon: <SiReact />, level: 'Advanced' },
  { name: 'Pandas', icon: <SiPandas />, level: 'Intermediate' },
];

const Experiences = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0e0e1c] text-zinc-800 dark:text-white px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-amber-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent">
        Expertise
      </h1>

      {/* Desktop Layout: Circular */}
      <div className="hidden md:block relative w-[400px] h-[400px]">
        {skills.map((skill, index) => {
          const radius = 160;
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="absolute flex flex-col items-center justify-center w-24 h-24 p-4 rounded-full shadow-lg bg-white dark:bg-[#1f1f2e] text-yellow-500 hover:scale-110 transition"
              style={{ left: `calc(50% + ${x}px - 48px)`, top: `calc(50% + ${y}px - 48px)` }}
            >
              <div className="text-3xl mb-1">{skill.icon}</div>
              <div className="text-sm font-bold text-center">{skill.name}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Layout: Grid */}
      <div className="md:hidden grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center w-28 h-28 p-4 rounded-xl shadow-lg bg-white dark:bg-[#1f1f2e] text-yellow-500 hover:scale-105 transition"
          >
            <div className="text-3xl mb-1">{skill.icon}</div>
            <div className="text-sm font-bold text-center">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
