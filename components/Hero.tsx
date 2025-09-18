import Image from 'next/image'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Платная скорая помощь в Бишкеке 24/7</h1>
        <p className="text-lg text-slate-600">Срочные выезды, перевозка лежачих пациентов, медицинское сопровождение мероприятий.</p>
        <div className="flex gap-3">
          <a href="tel:+996700122444" className="btn-primary">Позвонить 0700 122 444</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-brand text-brand hover:bg-brand/5 transition">Оставить заявку</a>
          <a href="tel:+996551122444" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-secondary text-secondary hover:bg-secondary/5 transition">Позвонить 0551 122 444</a>
        </div>
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow">
        <Image src="/ambulance.jpg" alt="Ambulance" fill className="object-cover" />
      </div>
    </section>
  )
}
