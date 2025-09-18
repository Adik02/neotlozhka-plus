export default function Testimonials() {
  return (
    <section className="section">
      <h2 className="section-title">Отзывы</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Елена', text: 'Быстро приехали, помогли и аккуратно довезли. Спасибо бригаде!' },
          { name: 'Азамат', text: 'Оформили перевозку лежачего, все спокойно и профессионально.' },
          { name: 'Камил', text: 'Рекомендую на мероприятия — дежурили, все четко.' }
        ].map((t,i)=> (
          <div key={i} className="card">
            <p className="text-slate-700">“{t.text}”</p>
            <p className="mt-3 text-sm text-slate-500">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
