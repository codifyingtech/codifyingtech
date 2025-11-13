import { Link } from "react-router-dom";
export default function CTAButtons() {
  return (
    <>
    <Link to ="/projects">
        <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white font-serif px-9 py-3 rounded-full sm:ml-3 hover:brightness-110  transition duration-300">
  Explore More
</button>
</Link>
  </>
  );
}
