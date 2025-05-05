import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 via-white to-yellow-100 dark:from-[#0e0e1c] dark:via-[#1a1a2e] dark:to-[#0e0e1c] text-zinc-800 dark:text-slate-100"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-amber-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg leading-relaxed font-medium">
          I’m a <span className="text-yellow-500">code crackhead</span> — relentless, obsessed, and always evolving.
          I'm from <strong>Delta State, Nigeria</strong>, and my tech journey began at the
          <strong> National Institute of Information Technology (NIIT)</strong>.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-medium">
          Over the past <strong>5 years</strong>, I’ve dived deep into software engineering, mastering an ever-expanding stack of technologies and disciplines. 
          In that time, I’ve built up solid experience as a:
        </p>
        <ul className="mt-4 text-left text-lg leading-relaxed font-medium list-disc list-inside space-y-2">
          <li><strong>Software Engineer</strong></li>
          <li><strong>Web Developer</strong></li>
          <li><strong>App Developer</strong></li>
          <li><strong>Data Analyst</strong></li>
          <li><strong>Robotics Engineer</strong></li>
        </ul>
        <p className="mt-6 text-lg leading-relaxed font-medium">
          I didn’t learn these in separate lifetimes — I picked them all up in just five years of intense grind, hands-on projects, and an obsession with growth. If I’m not coding, I’m studying. If I’m not studying, I’m building.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-medium">
          My mission? To push boundaries, create world-class digital experiences, and become the kind of engineer who solves problems before they even exist.
        </p>
      </div>
    </section>
  );
};

export default About;
