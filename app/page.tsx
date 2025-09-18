import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Advantage from '@/components/Advantage'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import FloatingCall from '@/components/FloatingCall'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container space-y-12 py-8">
        <Hero />
        <section className="grid md:grid-cols-3 gap-6">
          <Advantage title="Подача 24/7" desc="Оперативный выезд по всему Бишкеку и области" />
          <Advantage title="Опытные бригады" desc="Врачи и фельдшеры с практикой неотложной помощи" />
          <Advantage title="Оборудование" desc="Реанимобили, дефибрилляторы, кислород, носилки" />
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard title="Срочные выезды" desc="Оценка состояния, доврачебная помощь, транспортировка" />
            <ServiceCard title="Перевозка лежачих" desc="Безопасная транспортировка с сопровождением" />
            <ServiceCard title="Медсопровождение мероприятий" desc="Дежурство бригады и реанимобиля" />
          </div>
        </section>
        <Testimonials />
        <FAQ />
        <section id="contact" className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Нужна помощь сейчас?</h2>
            <p>Позвоните по номеру <a className="font-semibold" href="tel:+996700122444">2444</a> или оставьте заявку — мы перезвоним.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:+996700122444" className="btn-primary">Позвонить 0700 122 444</a>
              <a href="https://t.me/your_username" target="_blank" className="btn-primary">Написать в Telegram</a>
              <a href="tel:+996551122444" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-secondary text-secondary hover:bg-secondary/5 transition">Позвонить 0551 122 444</a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <FloatingCall />
      <Footer />
    </>
  )
}
