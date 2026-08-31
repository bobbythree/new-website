interface ServicesCardProps {
  title: string;
  items: string[];
}

export default function ServicesCard({ title, items }: ServicesCardProps) {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-stone-200 bg-white p-6">
      <h3 className="pb-3 text-2xl font-semibold text-slate-800">
        {title}
      </h3>

      <ul className="list-disc space-y-2 pl-5 pt-2 text-slate-700 marker:text-slate-500">
        {items.map((item, i) => (
          <li key={i} className="text-base leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

