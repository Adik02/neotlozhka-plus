export default function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card h-full">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  )
}
