'use client'
import { useState } from 'react'
const items = [
  { q: 'Когда вызывать платную скорую?', a: 'Когда нужен быстрый выезд, перевозка или дежурство на мероприятии.' },
  { q: 'Работаете 24/7?', a: 'Да, круглосуточно по Бишкеку и области.' },
  { q: 'Как оформить перевозку лежачего?', a: 'Оставьте заявку или позвоните 2444 — уточним адрес, время и состав бригады.' }
]
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section">
      <h2 className="section-title">Частые вопросы</h2>
      <div className="divide-y rounded-2xl border">
        {items.map((it, i)=> (
          <details key={i} open={open===i} onToggle={(e)=> setOpen((e.target as HTMLDetailsElement).open ? i : null)} className="p-4">
            <summary className="cursor-pointer font-semibold">{it.q}</summary>
            <p className="mt-2 text-slate-600">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
