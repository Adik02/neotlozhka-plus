'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="container py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Неотложка Плюс" width={40} height={40} />
          <span className="font-bold">Неотложка Плюс</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/services" className="hover:underline">Услуги</a>
          <a href="/contacts" className="hover:underline">Контакты</a>
          <a href="#contact" className="btn-primary">Вызвать скорую</a>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-xl border">Меню</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <a href="/services">Услуги</a>
            <a href="/contacts">Контакты</a>
            <a href="#contact" className="btn-primary">Вызвать скорую</a>
          </div>
        </div>
      )}
    </header>
  )
}
