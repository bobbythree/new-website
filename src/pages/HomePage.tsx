import HomepageHero from "../components/HomepageHero";
import ServicesCard from "../components/ServicesCard";
import { fullstack } from "../data/services";

export default function HomePage() {
  return (

    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900">
      <HomepageHero />
      <div className="flex gap-10 mt-25">
        <ServicesCard
          title={fullstack.title}
          items={fullstack.items}
        />
        <ServicesCard
          title={fullstack.title}
          items={fullstack.items}
        />
        <ServicesCard
          title={fullstack.title}
          items={fullstack.items}
        />
      </div>
    </div>
  )
}


