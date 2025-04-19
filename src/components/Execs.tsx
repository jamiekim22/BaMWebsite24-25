"use client";
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react";

// Sample data for the executive team
const team = [
  { name: "Betty Bao", role: "Co-Chair", image: "/exec/betty.png" },
  { name: "Srishti Rao", role: "Co-Chair", image: "/exec/srishti.png" },
  { name: "Meera Thomas", role: "Marketing", image: "/exec/meera.png" },
  { name: "Mireya Hosseini", role: "Marketing", image: "/exec/mireya.png" },
  { name: "Iris Liu", role: "External Relations", image: "/exec/iris.png" },
  { name: "Jamie Kim", role: "Developer", image: "/exec/jamie.png" },
  { name: "Leo Chung", role: "Technical", image: "/exec/leo.png" },
  { name: "Stephen Huang", role: "Finance", image: "/exec/stephen.png" },
  { name: "Katherine Hsu", role: "Operations", image: "/exec/katherine.png" },
  { name: "Sophia Yuan", role: "General", image: "/exec/sophia.png" },
  { name: "Rae J", role: "Mentor", image: "/exec/rae.png" },
];

// Group team members into pages of 4
const groupSize = 4;
const pages: { name: string; role: string; image: string; }[][] = [];
for (let i = 0; i < team.length; i += groupSize) {
  pages.push(team.slice(i, i + groupSize));
}
const totalPages = pages.length;

export default function ExecSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeoutRef = useRef<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Moves to the next page (cycles back to the first page at the end)
  const goToNextPage = () => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    const nextPage = (currentPage + 1) % totalPages;
    scrollRef.current.scrollTo({
      left: nextPage * containerWidth,
      behavior: "smooth",
    });
    setCurrentPage(nextPage);
  };

  // Sets (or resets) the auto-scroll timer for 3 seconds of inactivity.
  const resetAutoScrollTimer = () => {
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = window.setTimeout(() => {
      goToNextPage();
    }, 3000);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start the inactivity timer on mount.
    resetAutoScrollTimer();

    const handleUserScroll = () => {
      // Reset the timer whenever the user interacts.
      resetAutoScrollTimer();

      // Update the current page based on the new scroll position.
      const newPage = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentPage(newPage);
    };

    container.addEventListener("scroll", handleUserScroll);
    container.addEventListener("wheel", handleUserScroll);
    container.addEventListener("touchstart", handleUserScroll);

    return () => {
      container.removeEventListener("scroll", handleUserScroll);
      container.removeEventListener("wheel", handleUserScroll);
      container.removeEventListener("touchstart", handleUserScroll);
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [currentPage, resetAutoScrollTimer]);

  return (
    <section
      id="contact"
      className="relative bg-transparent px-8 py-20 text-black"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Meet the Executive Team
        </h2>
        <p className="text-lg text-center mb-16">
          For any inquiries, please reach out via our channels.
        </p>

        {/* Horizontal scrolling area, grouped into pages */}
        <div
          ref={scrollRef}
          className="overflow-x-auto flex scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full flex-shrink-0 flex justify-around snap-start"
            >
              {page.map((member, idx) => (
                <div key={idx} className="text-center">
                  {/* EXEC IMAGES */}

                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={112}
                    height={112}
                    className="rounded-full object-cover mb-4"
                  />

                  <p className="font-bold">{member.name}</p>
                  <p className="text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
