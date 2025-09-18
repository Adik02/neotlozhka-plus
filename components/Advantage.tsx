export default function Advantage({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  )
}
