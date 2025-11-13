
import CTAButtons from "./CTAButtons";
import TeamImage from "./TeamImage";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-7 lg:px-10 py-17 gap-10">
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <div className="text-center md:text-left px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent tracking-wide mb-4">
            Platforms Built for Progress
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-serif mb-6">
            Codifying Tech is a dynamic software house delivering modern, scalable solutions across web, mobile, 
            and digital platforms. We empower fresh talent with real‑world experience and mentorship, turning 
            ideas into impactful reality.
          </p>
          <div className="flex justify-center md:justify-start">
            <CTAButtons />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
       <TeamImage/>
      </div>
    </section>
  );
}
