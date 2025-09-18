import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validators'

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const payload = {
      name: String(form.get('name') || ''),
      phone: String(form.get('phone') || ''),
      comment: String(form.get('comment') || '')
    }
    const parsed = contactSchema.safeParse(payload)
    if (!parsed.success) return NextResponse.json({ ok: false, error: 'Некорректные данные' }, { status: 400 })

    const BOT = process.env.TELEGRAM_BOT_TOKEN
    const CHAT = process.env.TELEGRAM_CHAT_ID
    if (!BOT || !CHAT) return NextResponse.json({ ok: false, error: 'Сервер не настроен' }, { status: 500 })

    const text = `🚑 Новая заявка\nИмя: ${payload.name}\nТелефон: ${payload.phone}\nКомментарий: ${payload.comment}`
    const url = `https://api.telegram.org/bot${BOT}/sendMessage`

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT, text, parse_mode: 'HTML' })
    })
    if (!res.ok) throw new Error('TG error')
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Ошибка сервера' }, { status: 500 })
  }
}
