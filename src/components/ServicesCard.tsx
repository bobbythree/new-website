interface ServicesCardProps {
  title: string;
  items: string[];
}

export default function ServicesCard({ title, items }: ServicesCardProps) {
  return (
    <div className="flex flex-col w-sm bg-zinc-800 p-5 rounded-2xl">
      <h3 className="text-2xl text-sky-200 border-b">{title}</h3>
      <ul className="list-disc pl-5 pt-3">
        {items.map((item, i) => (
          <li key={i} className="text-md text-sky-300">{item}</li>
        ))}
      </ul>
    </div>
  )
}

