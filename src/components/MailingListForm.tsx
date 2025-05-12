"use client";
import { useState, ReactNode } from "react";

export default function MailingListForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [status,    setStatus]    = useState<ReactNode>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting…");

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_SUBSCRIBE_URL || "/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, email }),
        }
      );

      if (res.ok) {
        setStatus(
          <>
            Thanks for signing up, {firstName}! Stay tuned for updates on our{" "}
            <a
              href="https://discord.com/invite/CZjYxJ7J8p"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-blue-400"
            >
              discord
            </a>
            :)
          </>
        );
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        const { error } = await res.json().catch(() => ({}));
        setStatus(
          <>
            Sorry! Something went wrong{error ? `: ${error}` : ""} :( Try later,
            or join our{" "}
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
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus(
        <>
          Sorry! Couldn’t connect to the server. Try again later or jump into{" "}
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
      <div className="relative z-10 w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="
                flex-1
                p-3
                border
                border-gray-300
                bg-white
                text-gray-800
                rounded
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="
                flex-1
                p-3
                border
                border-gray-300
                bg-white
                text-gray-800
                rounded
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* Row 2: Email */}
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here to be notified of club updates"
              className="
                w-full
                p-3
                border
                border-gray-300
                bg-white
                text-gray-800
                rounded
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* Row 3: Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="
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
          </div>
        </form>

        {status && (
          <p className="mt-2 text-sm text-white drop-shadow-lg">{status}</p>
        )}
      </div>
    </section>
  );
}
