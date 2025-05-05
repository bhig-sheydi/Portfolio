import React from 'react';

const Services = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0e0e1c] min-h-screen py-20 px-4 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-amber-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent">
          Work Experience
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1: Vevacious Quest Interrvers Ltd */}
          <div className="bg-gradient-to-br from-[#ffeff6] to-[#fef9e7] dark:from-[#1e1e2e] dark:to-[#2a2a3b] rounded-3xl shadow-2xl p-6 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-2">Data Analyst</h2>
            <p className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
              Vevacious Quest Interrvers Ltd (1 Year)
            </p>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-400">
              A logistics company with over 21 years of partnership with Julius Berger.
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Equipment utilization & fleet efficiency</li>
              <li>Rental/sales trends & forecasting</li>
              <li>IoT-based predictive maintenance</li>
              <li>Inventory and asset tracking</li>
              <li>Dynamic operational dashboards</li>
              <li>Transport & cost optimization</li>
              <li>Data-driven strategic planning</li>
            </ul>
          </div>

          {/* Card 2: RENL */}
          <div className="bg-gradient-to-br from-[#e8f0ff] to-[#f3eaff] dark:from-[#1e1e2e] dark:to-[#2a2a3b] rounded-3xl shadow-2xl p-6 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-2">Robotics Instructor</h2>
            <p className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
              RENL (1 Year)
            </p>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-400">
              Training students in robotics and core programming.
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Python, JavaScript, and C++ fundamentals</li>
              <li>Core electronics and microcontroller basics</li>
              <li>Hardware-software integration methods</li>
              <li>Workshops and mentorship sessions</li>
            </ul>
          </div>

          {/* Card 3: Walking Universe Enterprise */}
          <div className="bg-gradient-to-br from-[#d7f9f3] to-[#e6fff9] dark:from-[#1e1e2e] dark:to-[#2a2a3b] rounded-3xl shadow-2xl p-6 transition-transform duration-300 hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-2">Founder & Developer</h2>
            <p className="text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
              Walking Universe Enterprise (Ongoing)
            </p>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-400">
              Delivering world-class software solutions.
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Custom-built web applications</li>
              <li>Clients: Prime FX, Cosmic Campus</li>
              <li>End-to-end fullstack systems</li>
              <li>Responsive UI/UX and design systems</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;