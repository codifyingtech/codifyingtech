import CTAButtons from './CTAButtons';
import TeamImage from './TeamImage';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-10">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Experience The Best IT Solutions</h2>
        <h3 className="text-xl font-semibold mb-2 text-white">Where Creativity Meets Cutting-Edge Technology</h3>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <CTAButtons />
      </div>
      <TeamImage />
    </section>
  );
}
