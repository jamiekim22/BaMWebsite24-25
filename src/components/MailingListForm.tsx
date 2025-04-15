'use client';
import { useState } from 'react';

export default function MailingListForm() {
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
      // Use your actual image file path here. For example: /images/bam-hero.png
      style={{ backgroundImage: "url('/images/bam-hero.png')" }}
      className="
        relative 
        min-h-screen 
        bg-no-repeat 
        bg-cover 
        bg-center 
        flex 
        items-end 
        justify-center
      "
    >
      {/* Optional dark/gradient overlay, if you want to shade the background a bit
      <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}

      <div className="relative z-10 w-full max-w-4xl p-4 flex flex-col items-center mb-10">
        <form
          onSubmit={handleSubmit}
          className="
            w-full 
            flex 
            flex-col 
            sm:flex-row 
            items-center 
            bg-white/90 
            backdrop-blur 
            rounded-md 
            shadow-lg 
            p-4
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
              bg-black 
              text-white 
              py-3 
              px-6 
              rounded 
              hover:bg-gray-800
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
