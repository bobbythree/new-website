import HomepageHero from "../components/HomepageHero";
import ServicesCard from "../components/ServicesCard";
import { webApps, businessSystems, modernization, consulting } from "../data/services";

export default function HomePage() {
  return (

    <div className="flex flex-col items-center justify-center h-screen bg-zinc-950">
      <HomepageHero />
      <div className="flex gap-5 mt-25">
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
  )
}


