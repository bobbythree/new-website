import FeaturedWork from "../components/FeaturedWork";
import HomepageHero from "../components/HomepageHero";
import ServicesCard from "../components/ServicesCard";
import {
  webApps,
  businessSystems,
  modernization,
  consulting,
} from "../data/services";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-stone-50">
      <HomepageHero />

      <div className="mt-25 w-full max-w-6xl px-6">
        <h2 className="text-4xl font-semibold text-slate-800 md:text-5xl">
          Services
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ServicesCard
            title={webApps.title}
            items={webApps.items}
          />

          <ServicesCard
            title={businessSystems.title}
            items={businessSystems.items}
          />

          <ServicesCard
            title={modernization.title}
            items={modernization.items}
          />

          <ServicesCard
            title={consulting.title}
            items={consulting.items}
          />
        </div>
      </div>

      <div className="w-full mt-25">
        <FeaturedWork />
      </div>
    </div>
  );
}
