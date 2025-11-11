import HomepageHero from "../components/HomepageHero";
import bgImage from "../assets/blue-green.jpg";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-800 flex items-center justify-center">
      {/* Background Image that shrinks with screen */}
      <div
        className="absolute top-0 left-0 flex items-center justify-center"
      >
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-auto max-w-[1920px] object-contain opacity-50"
        />
      </div>

      {/* Optional overlay for text contrast */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 text-center">
        <HomepageHero />
      </div>
    </div>
  );
}

