'use client';
import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('Thanks for subscribing!');
      setEmail('');
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <section
      id="signup"
      style={{ backgroundImage: "url('/images/bambg1(3by2).png')" }}
      className="
        relative 
        min-h-screen 
        bg-no-repeat 
        bg-cover 
        bg-center 
        flex 
        flex-col 
        items-center 
        justify-center
        px-4
      "
    >
      {/* -- TEXT OVERLAY -- */}
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900 drop-shadow-lg">
          THE BRAIN AND MUSIC <br className="hidden sm:block" />
          <span className="text-4xl md:text-7xl font-bold">CLUB</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-900 mt-4 drop-shadow-lg">
          at the University of British Columbia
        </p>
      </div>

      {/* -- SIGNUP FORM -- */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="
            w-full 
            flex 
            flex-col 
            sm:flex-row 
            items-center 
          "
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here to be notified of club updates"
            className="
              w-full 
              sm:w-auto
              flex-1
              p-3 
              border 
              border-gray-300
              bg-white
              text-gray-800 
              rounded 
              mb-2 
              sm:mb-0 
              sm:mr-2
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500
            "
          />
          <button
            type="submit"
            className="
              w-full 
              sm:w-auto
              bg-gradient-to-r 
              from-blue-400 
              to-indigo-500
              text-white 
              py-3 
              px-6 
              rounded 
              hover:from-blue-500 
              hover:to-indigo-600
              transition-colors
            "
          >
            Sign Up
          </button>
        </form>
        {status && (
          <p className="mt-2 text-sm text-white drop-shadow-lg">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
