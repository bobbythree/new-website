import HomepageHero from "../components/HomepageHero";
import ServicesCard from "../components/ServicesCard";

const fullstackItems: string[] = [
  "React", "Typescript", "Node.js", "Express.js", "Firebase"
]

export default function HomePage() {
  return (

    <div className="flex items-center justify-center h-screen bg-zinc-900">
      <HomepageHero />
      <ServicesCard
        title="Fullstack Web Apps"
        items={fullstackItems}
      />
    </div>
  )
}


