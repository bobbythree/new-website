interface ServicesCardProps {
  title: string;
  items: string[];
}

export default function ServicesCard({ title, items }: ServicesCardProps) {
  return (
    <div className="flex flex-col w-sm bg-sky-950 p-5 rounded-md">
      <h3 className="text-2xl text-sky-400">{title}</h3>
      <ul className="list-disc pl-5 pt-3">
        {items.map((item, i) => (
          <li key={i} className="text-xl text-sky-500">{item}</li>
        ))}
      </ul>
    </div>
  )
}

