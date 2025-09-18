'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    const form = new FormData(e.currentTarget)
    const res = await fetch('/api/contact', { method: 'POST', body: form })
    const data = await res.json()
    setLoading(false)
    setOk(data?.ok ? 'Заявка отправлена. Мы свяжемся с вами.' : data?.error || 'Ошибка отправки')
    if (data?.ok) (e.target as HTMLFormElement).reset()
    // gtag event (если подключён)
    // @ts-ignore
    if (window.gtag && data?.ok) window.gtag('event','lead_submit')
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-3">
      <div>
        <label className="block text-sm font-medium">Имя</label>
        <input name="name" required className="w-full mt-1 border rounded-xl px-3 py-2" placeholder="Ваше имя" />
      </div>
      <div>
        <label className="block text-sm font-medium">Телефон</label>
        <input name="phone" required className="w-full mt-1 border rounded-xl px-3 py-2" placeholder="+996 ..." />
      </div>
      <div>
        <label className="block text-sm font-medium">Комментарий</label>
        <textarea name="comment" rows={4} className="w-full mt-1 border rounded-xl px-3 py-2" placeholder="Куда и когда подать машину" />
      </div>
      <button className="btn-primary" disabled={loading}>{loading ? 'Отправка…' : 'Отправить'}</button>
      {ok && <p className="text-sm text-slate-600">{ok}</p>}
    </form>
  )
}
