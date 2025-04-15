'use client';

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Statistics() {
  // Use useInView hook for viewport detection
  const { ref, inView } = useInView({
    threshold: 0.4,    // triggers when threshold of the section is visible
    triggerOnce: true,
  });

  return (
    <section
      id="statistics"
      ref={ref} // attach ref for viewport observation
      className="min-h-full bg-[#3C1868] text-white py-16 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Stat #1: Members */}
          <div>
            <h3 className="text-5xl md:text-6xl font-extrabold 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-pink-400 via-blue-300 to-purple-500">
              {inView ? (
                <CountUp start={0} end={35} duration={2} />
              ) : (
                0
              )}
              +
            </h3>
            <p className="mt-2 text-xl font-medium">Members</p>
          </div>

          {/* Stat #2: Majors */}
          <div>
            <h3 className="text-5xl md:text-6xl font-extrabold 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-pink-400 via-blue-300 to-purple-500">
              {inView ? (
                <CountUp start={0} end={5} duration={2} />
              ) : (
                0
              )}
              +
            </h3>
            <p className="mt-2 text-xl font-medium">Majors</p>
          </div>

          {/* Stat #3: Years Running */}
          <div>
            <h3 className="text-5xl md:text-6xl font-extrabold 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-pink-400 via-blue-300 to-purple-500">
              {inView ? (
                <CountUp start={0} end={3} duration={2} />
              ) : (
                0
              )}
            </h3>
            <p className="mt-2 text-xl font-medium">Years Running</p>
          </div>
        </div>
      </div>
    </section>
  );
}
