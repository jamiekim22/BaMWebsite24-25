"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3C1868] text-white py-10 px-6 relative">
      {/* Top Section: "Thanks for visiting!" + Social + Vinyl + Big Logo */}
      <div className="
        container mx-auto 
        flex flex-col 
        items-center 
        sm:flex-row 
        sm:items-start 
        sm:justify-between
        space-y-6 
        sm:space-y-0
      ">
        {/* Left Column */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl md:text-2xl font-bold">
            Thanks for visiting!
          </h2>
          <p className="text-sm md:text-base">
            Stay in the loop.
          </p>

          {/* Social Icons - replace '#' with actual links */}
          <div className="flex items-center space-x-4">
            <Link href="https://www.instagram.com/ubc.bam/" aria-label="Instagram">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={28}
                height={28}
              />
            </Link>
            <Link href="https://discord.com/invite/CZjYxJ7J8p" aria-label="Discord">
              <Image
                src="/icons/discord.png"
                alt="Discord"
                width={30}
                height={30}
              />
            </Link>
            <Link href="mailto:ubc.bam@gmail.com" aria-label="Email">
              <Image
                src="/icons/email.png"
                alt="Email"
                width={36}
                height={36}
              />
            </Link>
          </div>

          {/* Vinyl Record(s) - optional decorative image */}
          <div className="mt-2">
            <Image
              src="/icons/vinyls.png"
              alt="Vinyl Records"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Column: Large "UBC Brain and Music" Logo */}
        <div className="mt-4 sm:mt-0">
          <Image
            src="/logos/bam-logo-full.png"
            alt="UBC Brain and Music Logo"
            width={150}
            height={150}
            className="object-contain filter invert"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="
        container mx-auto
        mt-8
        flex flex-wrap
        justify-center
        gap-4
        text-sm
        md:text-base
      ">
        <Link href="#home"  className="hover:opacity-80">Home</Link>
        <Link href="#about" className="hover:opacity-80">About</Link>
        <Link href="#symposium" className="hover:opacity-80">Symposium</Link>
        <Link href="#events" className="hover:opacity-80">All Events</Link>
        <Link href="#contact" className="hover:opacity-80">Contact</Link>
        <a href="#top" className="hover:opacity-80">Back To Top</a>
      </div>

      {/* Gradient Line */}
      <div
        className="
          absolute
          left-0
          right-0
          bottom-17
          h-[1px]
          bg-gradient-to-r
          from-pink-400
          via-blue-300
          to-purple-500
        "
      />

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-white/80">
        © 2025 Copyright by UBC Brain and Music. All rights reserved.
      </div>

    </footer>
  );
}
