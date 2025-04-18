'use client';
import { useState, ReactNode } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<ReactNode>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus(
        <>
          Signed up! Stay tuned for updates on our{' '}
          <a
            href="https://discord.com/invite/CZjYxJ7J8p"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-blue-400"
          >
            discord
          </a>{' '}
          :)
        </>
      );
      setEmail('');
    } else {
      setStatus(
        <>
          Sorry! Something went wrong :( Try later, or join our{' '}
          <a
            href="https://discord.com/invite/CZjYxJ7J8p"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-blue-400"
          >
            discord
          </a>
          !
        </>
      );
    }
  };

  return (
    <section
      id="signup"
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
        overflow-hidden
      "
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/bam2021.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Darken Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Text */}
      <div className="relative z-10 text-center mb-8 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
          THE BRAIN AND MUSIC <br className="hidden sm:block" />
          <span className="text-4xl md:text-7xl font-bold">CLUB</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mt-4 drop-shadow-lg">
          at the University of British Columbia
        </p>
      </div>

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
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
