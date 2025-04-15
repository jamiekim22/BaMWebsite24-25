import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50">
      {/* Navbar Container */}
      <nav className="relative bg-[#3C1868] text-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logos/bam-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="filter invert"
            />
          </div>
          {/* Navigation links */}
          <div className="space-x-8 text-base font-medium">
            <a href="#about" className="hover:opacity-80 transition">
              About
            </a>
            <a href="#events" className="hover:opacity-80 transition">
              Symposium
            </a>
            <a href="#events" className="hover:opacity-80 transition">
              Events
            </a>
            <a href="#contact" className="hover:opacity-80 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Gradient bottom border */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px]
                     bg-gradient-to-r from-pink-400 via-blue-300 to-purple-500"
        />
      </nav>
    </header>
  );
}
