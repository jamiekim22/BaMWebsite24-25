import Image from "next/image"

export default function EventsSection() {
  return (
    <section
      id="events"
      className="
        bg-[#3C1868]
        text-white
        px-4
        py-20
      "
    >
      {/* Main container to center the content */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* "Our Events" heading */}
        <div>
          <h4 className="text-sm uppercase tracking-wide mb-2">Our Events</h4>
        </div>

        {/* Upcoming event */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
          Upcoming event: BaM Social Dec 2025! Date TBD!!
          </h2>
          <p className="text-lg">
            Sign up on our{" "}
            <a
              href="#signup"
              className="underline hover:opacity-80"
            >
              mailing list
            </a>{" "}
            to be notified when registration opens.
          </p>
        </div>

        {/* Upcoming event */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
          Previous Events
          </h2>
          <p>
          <a href="https://www.instagram.com/p/DORm8N6kn4j/?img_index=1">
            <u>Music and the Brain</u>
          </a>
          </p>

          {/* Upcoming Highlight image */}
          <div className="items-center justify-between">
            <Image
            src="/events/symposium.png"
            alt="image"
            width={700}
            height={700}
            loading="lazy"
            style={{objectFit: "contain"}}	
            />
          </div>

        </div>
        
        {/* Previous Symposium */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Previous Symposiums
          </h2>
          <p className="text-lg">
          BaM Symposium 2025
          </p>

          <div className="video">
          <iframe className="responsive-iframe"
          src="https://youtu.be/CLRZ4z8C7Pg?si=8A61a1yaDL-H7_Ag" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
          </div>

        </div>
        {/* Previous Symposium */}
        <div className="space-y-3">
          <p className="text-lg">
          BaM Symposium 2021 Teaser
          </p>

          <div className="video">
          <iframe className="responsive-iframe"
          src="https://www.youtube.com/embed/HVKh456QQbA?si=_B4DrCWSRJ4ysx_V" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
          </div>

        </div>

        {/* Example: BaM Community Events (Optional Extra) */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            BaM Community Events
          </h2>
          <p className="text-lg">
            Join us for some fun, casual events! Including, but not limited to:
            journal clubs, study cafes, and more.
          </p>

          {/* Placeholder row of event flyers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="/events/journalclub.png"
              alt="image"
              width={500}
              height={500}
            />
            <Image
              src="/events/lofistudycafe.png"
              alt="image"
              width={500}
              height={500}
            />
            <Image
              src="/events/OCTOBER EVENT POST.png"
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
